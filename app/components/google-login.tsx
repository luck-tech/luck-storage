import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { env } from "@/env";

function GoogleAuthComponentLogin() {
  const login = useGoogleLogin({
    flow: "implicit", // TODO: PKCEの利用
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
    },
    onError: () => {
      console.error("Login failed");
    },
    prompt: "select_account",
  });

  return (
    <button
      style={{ width: "-webkit-fill-available", textAlign: "left" }}
      onClick={() => login()}
    >
      login
    </button>
  );
}

export default function LoginButton() {
  return (
    <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
      <GoogleAuthComponentLogin />
    </GoogleOAuthProvider>
  );
}
