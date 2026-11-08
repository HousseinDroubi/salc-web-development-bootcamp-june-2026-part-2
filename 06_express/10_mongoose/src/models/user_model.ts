import mongoose from "mongoose";
import UserSchemaModel from "../schemas/user_schema.js";

class UserModel {
  // Add
  public static async add1() {
    try {
      const user = await UserSchemaModel.create({
        name: "Houssein",
        age: 20,
        hourly_pay: 14,
        email: "HOUSSEIN@example.com",
        added_at: Date.now(),
        updated_at: Date.now(),
        skills: ["Reading", "Learning"],
        supervisor_id: "6aea59e44708588b376b940f",
        address: {
          region: "Beqaa",
          country: "lb",
        },
      });
      console.log(user);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  }

  public static async add2() {
    try {
      const user = await UserSchemaModel.create([
        {
          name: "Houssein",
          age: 20,
          hourly_pay: 14,
          email: "HOUSSEIN@example.com",
          added_at: Date.now(),
          updated_at: Date.now(),
          skills: ["Reading", "Learning"],
          supervisor_id: "6aea59e44708588b376b940f",
          address: {
            region: "Beqaa",
            country: "lb",
          },
        },
        {
          name: "Houssein",
          age: 20,
          hourly_pay: 14,
          email: "HOUSSEIN1@example.com",
          added_at: Date.now(),
          updated_at: Date.now(),
          skills: ["Reading", "Learning"],
          supervisor_id: "6aea59e44708588b376b940f",
          address: {
            region: "Beqaa",
            country: "lb",
          },
        },
      ]);
      console.log(user);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  }

  public static async add3() {
    try {
      const user = new UserSchemaModel({
        name: "Houssein",
        age: "20",
        hourly_pay: 14,
        email: "HOUSSEIN@example.com",
        added_at: Date.now(),
        updated_at: Date.now(),
        skills: ["Reading", "Learning"],
        supervisor_id: "6aea59e44708588b376b940f",
        address: {
          region: "Beqaa",
          country: "lb",
        },
      });
      await user.save();
      console.log(user);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  }

  // Insert:
  public static async insert1() {
    try {
      const user = await UserSchemaModel.insertOne({
        name: "Houssein",
        age: 20,
        hourly_pay: 14,
        email: "HOUSSEIN@example.com",
        added_at: Date.now(),
        updated_at: Date.now(),
        skills: ["Reading", "Learning"],
        supervisor_id: "6aea59e44708588b376b940f",
        address: {
          region: "Beqaa",
          country: "lb",
        },
      });
      console.log(user);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  }

  // Does NOT trigger save middleware (only insertMany hooks)
  public static async insert2() {
    try {
      const user = await UserSchemaModel.insertMany([
        {
          name: "Houssein",
          age: 20,
          hourly_pay: 14,
          email: "HOUSSEIN@example.com",
          added_at: Date.now(),
          updated_at: Date.now(),
          skills: ["Reading", "Learning"],
          supervisor_id: "6aea59e44708588b376b940f",
          address: {
            region: "Beqaa",
            country: "lb",
          },
        },
        {
          name: "Houssein",
          age: 20,
          hourly_pay: 14,
          email: "HOUSSEIN1@example.com",
          added_at: Date.now(),
          updated_at: Date.now(),
          skills: ["Reading", "Learning"],
          supervisor_id: "6aea59e44708588b376b940f",
          address: {
            region: "Beqaa",
            country: "lb",
          },
        },
      ]);
      console.log(user);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  }

  public static async seed() {
    try {
      await UserSchemaModel.deleteMany({});

      // 1. Top-Level Managers / Supervisors (no supervisor_id)
      const managers = await UserSchemaModel.create([
        {
          name: "Tarek Mansour",
          age: 33,
          hourly_pay: 64,
          email: "tarek.mansour@example.com",
          skills: ["Management", "System Design", "Node.js"],
          address: { country: "LB", region: "Beirut" },
        },
        {
          name: "Ahmad Charaf",
          age: 42,
          hourly_pay: 58,
          email: "ahmad.charaf@example.com",
          skills: ["Leadership", "Agile", "TypeScript"],
          address: { country: "LB", region: "Mount Lebanon" },
        },
      ]);

      const [tarek, ahmad] = managers;

      // 2. Team Members linked to supervisors
      const teamMembers = [
        // Subordinates under Tarek
        {
          name: "Houssein Kassir",
          age: 29,
          hourly_pay: 36,
          email: "houssein.kassir@example.com",
          supervisor_id: tarek!._id,
          skills: ["Node.js", "React", "TypeScript"],
          address: { country: "LB", region: "Beqaa" },
        },
        {
          name: "Nour Hamdan",
          age: 24,
          hourly_pay: 26,
          email: "nour.hamdan@example.com",
          supervisor_id: tarek!._id,
          skills: ["React", "UI/UX", "CSS"],
          address: { country: "LB", region: "Tripoli" },
        },
        {
          name: "Ali Barakat",
          age: 33,
          hourly_pay: 42,
          email: "Ali.barakat@example.com",
          supervisor_id: tarek!._id,
          skills: ["MongoDB", "Docker", "Node.js"],
          address: { country: "LB", region: "Sidon" },
        },

        // Subordinates under Ahmad
        {
          name: "Ahmad Chahine",
          age: 33,
          hourly_pay: 20,
          email: "ahmad.chahine@example.com",
          supervisor_id: ahmad!._id,
          skills: ["Python", "Machine Learning"],
          address: { country: "AE", region: "Dubai" },
        },
        {
          name: "Reem Al Sayegh",
          age: 30,
          hourly_pay: 38,
          email: "reem.sayegh@example.com",
          supervisor_id: ahmad!._id,
          skills: ["TypeScript", "Next.js", "GraphQL"],
          address: { country: "LB", region: "Beirut" },
        },
        {
          name: "Omar Kabbani",
          age: 26,
          hourly_pay: 28,
          email: "omar.kabbani@example.com",
          supervisor_id: ahmad!._id,
          skills: ["QA Testing", "Cypress", "JavaScript"],
          address: { country: "QA", region: "Doha" },
        },

        // Independent Contractors / Consultants (no supervisor)
        {
          name: "Ziad Salem",
          age: 65,
          hourly_pay: 80,
          email: "ziad.salem@example.com",
          skills: ["System Architecture", "Security", "Linux"],
          address: { country: "LB", region: "Beirut" },
        },
        {
          name: "Laila Najjar",
          age: 50,
          hourly_pay: 74,
          email: "laila.najjar@example.com",
          skills: ["Cloud Architecture", "DevOps", "Kubernetes"],
          address: { country: "IR", region: "Fars" },
        },
      ];

      const insertedMembers = await UserSchemaModel.insertMany(teamMembers);

      console.log(
        `Successfully seeded ${managers.length + insertedMembers.length} users!`,
      );
    } catch (error) {
      if (error instanceof Error) {
        console.error("Seeding failed:", error.message);
      } else {
        console.error("Unexpected error while seeding:", error);
      }
      throw error;
    }
  }

  // The Core Retrieval Methods: Return Types Matter
  // []
  public static async find1() {
    const allUsers = await UserSchemaModel.find();
    console.log(allUsers);
  }

  // []
  public static async find2() {
    const usersAge33 = await UserSchemaModel.find({ age: 33 });
    console.log(usersAge33);
  }

  public static async find3() {
    const user = await UserSchemaModel.findOne({
      email: "ahmad.charaf@example.com",
    });

    if (!user) {
      console.log("User not found");
      return;
    }
    console.log(user);
  }

  public static async find4() {
    // Replace the _id here from the seed result
    const user = await UserSchemaModel.findById("6aeabcd59ba6783c26c218a0");

    if (!user) {
      console.log("User not found");
      return;
    }
    console.log(user);
  }

  // Comparison Operators ($gt, $gte, $lt, $lte,$eq, $ne, $in)
  public static async find5() {
    const users = await UserSchemaModel.find({
      age: { $gt: 21 },
    });
    console.log(users);
  }

  public static async find6() {
    const users = await UserSchemaModel.find({
      age: { $gte: 21 },
    });
    console.log(users);
  }

  public static async find7() {
    const users = await UserSchemaModel.find({
      age: { $lt: 65 },
    });
    console.log(users);
  }

  public static async find8() {
    const users = await UserSchemaModel.find({
      age: { $lte: 65 },
    });
    console.log(users);
  }

  public static async find9() {
    const users = await UserSchemaModel.find({
      age: { $gte: 21, $lte: 65 },
    });
    console.log(users);
  }

  public static async find10() {
    const users = await UserSchemaModel.find({
      age: { $eq: 33 },
    });
    console.log(users);
  }

  public static async find11() {
    const users = await UserSchemaModel.find({
      age: { $ne: 33 },
    });
    console.log(users);
  }
  public static async find12() {
    const users = await UserSchemaModel.find({
      age: { $in: [33, 21, 42] },
    });
    console.log(users);
  }

  // Logical Operators: $or, $and, $nor
  public static async find13() {
    const users = await UserSchemaModel.find({
      $or: [{ age: { $lt: 25 } }, { hourly_pay: { $gte: 50 } }],
    });
    console.log(users);
  }

  public static async find14() {
    const users = await UserSchemaModel.find({
      $and: [
        {
          $or: [{ age: { $lt: 25 } }, { age: { $gt: 60 } }],
        },
        { "address.country": "LB" },
      ],
    });
    console.log(users);
  }

  // The Fluent/Chainable Query API: .where()
  public static async find15() {
    const users = await UserSchemaModel.find()
      .where("age")
      .gte(30)
      .lte(60)
      .where("hourly_pay")
      .gt(24)
      .where("address.country")
      .equals("LB");
    console.log(users);
  }

  // Querying Schema-Specific Types
  public static async find16() {
    //  Array contains an exact item:
    const users = await UserSchemaModel.find({ skills: "JavaScript" });
    console.log(users);
  }

  public static async find17() {
    //Array contains ALL of the specified items ($all):
    const users = await UserSchemaModel.find({
      skills: { $all: ["React", "Node.js"] },
    });
    console.log(users);
  }

  // 3. Array by length ($size):
  public static async find18() {
    const users = await UserSchemaModel.find({ skills: { $size: 3 } });
    console.log(users);
  }

  // Embedded Subdocument (address: address_schema)
  public static async find19() {
    const users = await UserSchemaModel.find({
      "address.country": "LB",
    });
    console.log(users);
  }

  public static async find20() {
    const users = await UserSchemaModel.findOne({
      "address._id": "6727f71ab91931dae8f6e102",
    });
    console.log(users);
  }

  // References(supervisor_id: mongoose.Types.ObjectId);
  public static async find21() {
    const users = await UserSchemaModel.find({
      supervisor_id: new mongoose.Types.ObjectId("6aeabcd59ba6783c26c218a0"),
    });
    console.log(users);
  }

  // Select from result
  public static async find22() {
    const users = await UserSchemaModel.find({
      $or: [{ age: { $lt: 25 } }, { hourly_pay: { $gte: 50 } }],
    }).select("name");
    console.log(users);
  }

  public static async find23() {
    const users = await UserSchemaModel.find({
      $or: [{ age: { $lt: 25 } }, { hourly_pay: { $gte: 50 } }],
    }).select("name age hourly_pay email");
    console.log(users);
  }

  // Execute from result
  public static async find24() {
    const users = await UserSchemaModel.find({
      $or: [{ age: { $lt: 25 } }],
    }).select("-hourly_pay -email");
    console.log(users);
  }

  public static async find25() {
    const users = await UserSchemaModel.find({
      $or: [{ age: { $lt: 25 } }],
    }).select("name age -_id");
    console.log(users);
  }

  // Limit
  public static async find26() {
    const users = await UserSchemaModel.find({
      $or: [{ age: { $lt: 25 } }, { hourly_pay: { $gte: 50 } }],
    })
      .select("name age hourly_pay email")
      .limit(1);
    console.log(users);
  }

  // Sort
  public static async find27() {
    const users = await UserSchemaModel.find({ age: { $gte: 20 } })
      .select("name email hourly_pay -_id")
      .sort({ name: -1 }); // Sort: name DESC
    console.log(users);
  }

  public static async find28() {
    const users = await UserSchemaModel.find({ age: { $gte: 20 } })
      .select("name email hourly_pay -_id")
      .sort({ name: -1, hourly_pay: 1 }); // Sort: name DESC, then hourly_pay ASC
    console.log(users);
  }

  // Skip
  public static async find29() {
    const page = 1;
    const pageSize = 2;
    const users = await UserSchemaModel.find({ age: { $gte: 20 } })
      .select("name email hourly_pay -_id")
      .skip(2); // Pagination: skip previous pages
    console.log(users);
  }

  // Pagination (skip and limit)
  public static async find30() {
    const page = 1;
    const pageSize = 2;
    const users = await UserSchemaModel.find({ age: { $gte: 20 } })
      .select("name email hourly_pay -_id")
      .skip((page - 1) * pageSize) // Pagination: skip previous pages
      .limit(pageSize);
    console.log(users);
  }

  // Populate (References)
  public static async find31() {
    const users = await UserSchemaModel.findOne({
      age: { $gte: 20 },
      supervisor_id: { $ne: null },
    }).populate("supervisor_id");
    console.log(users);
  }

  public static async find32() {
    const users = await UserSchemaModel.findOne({
      age: { $gte: 20 },
      supervisor_id: { $ne: null },
    }).populate("supervisor_id", "name email -_id");
    console.log(users);
  }

  // lean
  // lean() tells Mongoose to return a plain JavaScript object (POJO) instead of a heavy Mongoose Document.
  public static async find33() {
    const users = await UserSchemaModel.findOne({
      age: { $gte: 20 },
    }).lean();
    console.log(users);
  }

  // Relations: Find users with their phones
  public static async find34() {
    const users = await UserSchemaModel.find({}).populate("phones");
    console.log(users);
  }

  // Update
  // Method 1: findOne() + save() or findById() + save() -> This method use validations
  public static async update1() {
    const user = await UserSchemaModel.findOne({
      email: "houssein.kassir@example.com",
    });

    if (user) {
      // 2. Mutate properties
      user.age = 30;
      user.hourly_pay = 40; // Still validated! Must be >= 12 and even
      user.skills.push("GraphQL");

      await user.save();
    }
    console.log(user);
  }

  // Method 2: findByIdAndUpdate() -> This method does not use validations unless you foce it to do so with the runValidators option. It also returns the original document by default, not the updated one.
  public static async update2() {
    const user = await UserSchemaModel.findOneAndUpdate(
      { _id: "6aeabcd59ba6783c26c218a4" }, // Query filter object
      {
        $set: { age: 31, hourly_pay: 42 },
        $push: { skills: "Docker" },
      },
      {
        returnDocument: "after", // Return the updated document instead of the old one
        runValidators: true, // Run schema validators on the updated fields
      },
    );
    console.log(user);
  }

  // Method 4: updateOne() -> This method does not no return the new user

  public static async update4() {
    const result = await UserSchemaModel.updateOne(
      { "address.country": "LB" },
      { $set: { hourly_pay: 52 } },
      { runValidators: true },
    );
    console.log(
      `Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`,
    );
  }
  // Method 4: updateMany() -> This method does not no return the new user

  public static async update5() {
    const result = await UserSchemaModel.updateMany(
      { "address.country": "LB" },
      { $set: { hourly_pay: 50 } },
      { runValidators: true },
    );
    console.log(
      `Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`,
    );
  }

  // Replace
  public static async replace() {
    const user = await UserSchemaModel.findOneAndReplace(
      { email: "houssein.kassir@example.com" }, // Filter
      {
        // The entire replacement document:
        name: "Houssein K.",
        email: "houssein.new@example.com",
        hourly_pay: 50,
      },
      {
        returnDocument: "after", // Return the new document
        runValidators: true, // Validate replacement against schema
      },
    );
    console.log(user);
  }

  // delete
  // deleteOne
  public static async delete1() {
    const result = await UserSchemaModel.deleteOne({
      email: "ahmad.chahine@example.com",
    });

    console.log(`Deleted count: ${result.deletedCount}`);

    if (result.deletedCount === 0) {
      console.log("No user found with that email.");
    } else {
      console.log("User successfully deleted.");
    }
  }

  public static async delete2() {
    const result = await UserSchemaModel.deleteMany({
      $or: [{ hourly_pay: { $lt: 25 } }, { "address.country": { $ne: "LB" } }],
    });

    console.log(`Purged ${result.deletedCount} users from the database.`);
  }

  public static async delete3() {
    const result = await UserSchemaModel.deleteMany({});

    console.log(`Purged ${result.deletedCount} users from the database.`);
  }

  // Methods
  public static async customMethod() {
    const user = await UserSchemaModel.findOne({
      email: "ahmad.charaf@example.com",
    });

    if (!user) {
      console.log("User not found");
      return;
    }
    user.sayHi();
  }

  // Statics methods
  public static async staticMethod() {
    const user = await UserSchemaModel.findByName("Houssein");

    if (!user) {
      console.log("User not found");
      return;
    }
    console.log(user);
  }

  // query methods
  public static async queryMethod() {
    const users = await UserSchemaModel.find().byName("houssein");

    console.log(users);
  }
}

export default UserModel;
