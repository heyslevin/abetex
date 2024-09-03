import * as React from "react";

interface EmailTemplateProps {
  formValues: any;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (
  formValues,
) => {
  return (
    <div>
      <h1>You have a new message from your website contact form!</h1>
      <div>
        {Object.entries(formValues).map(([key, value]) => (
          <div key={key} className="mb-8">
            <span className="text-gray-500">{key}:</span>{" "}
            <span className="text-black">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
