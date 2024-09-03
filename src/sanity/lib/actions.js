import { useFormValue } from "sanity";

export function patchReferenceAction(originalPublishAction, context) {
  const client = context.getClient({ apiVersion: "2024-08-01" });
  const PatchReferenceDocument = (props) => {
    const originalResult = originalPublishAction(props);
    return {
      ...originalResult,
      onHandle: async () => {
        //Todo see if these 2 patches can be queued together

        //First look for any document with homepage = true, set false
        const query = "*[isHomepage == true]{_id}[0]";
        let { _id: prevHome } = await client.fetch(query);
        const removePrevHome = client
          .patch(prevHome)
          .set({ isHomepage: false });

        //Then Set referenced document to homepage = true
        let nextHome = props.draft.homepage._ref;
        const addNewHome = client.patch(nextHome).set({ isHomepage: true });

        //Batch both patches
        await client
          .transaction()
          .patch(removePrevHome)
          .patch(addNewHome)
          .commit();

        //Default Publish action
        originalResult.onHandle();
      },
    };
  };
  return PatchReferenceDocument;
}
