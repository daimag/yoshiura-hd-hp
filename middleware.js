import { NextResponse } from "next/server";

// 公開前プレビュー保護（Basic認証）
// 環境変数 SITE_AUTH_USER / SITE_AUTH_PASS の両方が設定されている間だけ認証を要求します。
// 一般公開する際は Vercel 側でこの2変数を削除すれば、誰でも閲覧可能になります。
export function middleware(request) {
  const user = process.env.SITE_AUTH_USER;
  const pass = process.env.SITE_AUTH_PASS;

  // 認証情報が未設定なら公開状態（素通り）
  if (!user || !pass) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const sep = decoded.indexOf(":");
      const u = decoded.slice(0, sep);
      const p = decoded.slice(sep + 1);
      if (u === user && p === pass) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
