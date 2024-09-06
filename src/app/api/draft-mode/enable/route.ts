// ./src/app/api/draft-mode/enable/route.ts

import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { clientv2 as client } from "@/src/sanity/lib/newclient";
import { token } from "@/src/sanity/lib/token";

const clientWithToken = client.withConfig({ token });

export async function GET(request: NextRequest) {
  if (!process.env.SANITY_API_READ_TOKEN) {
    return new Response("Missing environment variable SANITY_API_READ_TOKEN", {
      status: 500,
    });
  }

  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    request.url,
  );

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  draftMode().enable();
  return NextResponse.redirect(new URL(redirectTo, request.url));
}
