import { Account, Client, ID } from "react-native-appwrite";

export const AppwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.ranadawar.aora",
  projectId: "6669fca50028943dbd01",
  databaseId: "6669fec6001b10a94782",
  userCollectionId: "6669ff5a000d3cc3bf99",
  videoCollectionId: "6669ff7f00221223f9ed",
  storageId: "666a630400185a9d18da",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(AppwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(AppwriteConfig.projectId) // Your project ID
  .setPlatform(AppwriteConfig.platform); // Your application ID or bundle ID.

export const createAccount = async (
  email: string,
  password: string,
  name: string
) => {
  const account = new Account(client);

  // Register User
  account.create(ID.unique(), email, password, name).then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
