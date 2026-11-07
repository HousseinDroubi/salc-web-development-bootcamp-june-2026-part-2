import PhoneSchemaModel from "../schemas/phone_schema.js";
import UserSchemaModel from "../schemas/user_schema.js";

class PhoneModel {
  // Clears existing phones and seeds new devices distributed across existing users.

  public static async seed(): Promise<void> {
    try {
      // 1. Fetch available users to link phones to
      const users = await UserSchemaModel.find().select("_id name email");

      if (users.length === 0) {
        console.warn("No users found in database. Run UserModel.seed() first!");
        return;
      }

      // 2. Wipe existing phone records
      await PhoneSchemaModel.deleteMany({});
      console.log("Cleared existing phones collection.");

      // 3. Map devices across different users
      const [user1, user2, user3] = users;

      const phones = [
        {
          name: "X1",
          price: 400,
          user_id: user1!._id,
        },
        {
          name: "X2",
          price: 300,
          user_id: user1!._id,
        },

        {
          name: "Y1",
          price: 290,
          user_id: user2!._id,
        },
        {
          name: "Y2",
          price: 500,
          user_id: user2!._id,
        },

        {
          name: "Z1",
          price: 290,
          user_id: user3!._id,
        },
        {
          name: "Z2",
          price: 400,
          user_id: user3!._id,
        },
      ];

      // 4. Batch insert into database
      const insertedPhones = await PhoneSchemaModel.insertMany(phones);

      console.log(`Successfully seeded ${insertedPhones.length} phones!`);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Phone seeding failed:", error.message);
      } else {
        console.error("Unexpected error while seeding phones:", error);
      }
      throw error;
    }
  }
}

export default PhoneModel;
