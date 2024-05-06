import { IAMClient, RemoveUserFromGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
// const { IAMClient, RemoveUserFromGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
const client = new IAMClient();
const input = { // RemoveUserFromGroupRequest
  GroupName: "New_Group", // required
  UserName: "updated_NewRaj", // required
};
const command = new RemoveUserFromGroupCommand(input);
const response = await client.send(command);
console.log(response)

