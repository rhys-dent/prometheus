import Amplify, { Auth } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return <div>Hello</div>;
}

export default withAuthenticator(App);
