import { Prisma, PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const prisma = new PrismaClient({ adapter }); // Also you can pass: log:["query"] to find out the query executed

class Model {
  public static async createStudentData1() {
    const student = await prisma.student.create({
      data: {
        name: "houssein",
        email: "houssein@example.com",
        age: 23,
        address: {
          region: "Beqaa",
          country: "LB",
        },
        gpa: 3.5,
      },
    });
    console.log(student);
  }

  // Nested creation
  public static async createStudentData2() {
    const student = await prisma.student.create({
      data: {
        name: "houssein",
        email: "houssein@example.com",
        age: 23,
        address: {
          region: "Beqaa",
          country: "LB",
        },
        gpa: 3.5,
        studentHealthProfile: {
          create: {
            blood_type: "O_P",
          },
        },
      },
      include: {
        studentHealthProfile: true,
      },
      // Below will get only the studentHealthProfile
      // select: {
      //   studentHealthProfile: true,
      // },

      // Or you can do
      // select: {
      //   name: true,
      //   studentHealthProfile: true
      // },

      // Or you can do
      // select: {
      //   name: true,
      //   studentHealthProfile: {
      //     select: { id: true },
      //   },
      // },
    });
    console.log(student);
  }

  // You can't use select, include or nested creation here
  public static async createStudentData3() {
    // Because it returns result
    const result = await prisma.student.createMany({
      data: [
        {
          name: "houssein",
          email: "houssein@example.com",
          age: 23,
          address: {
            region: "Beqaa",
            country: "LB",
          },
          gpa: 3.5,
        },
        {
          name: "hassan",
          email: "hassan@example.com",
          age: 23,
          address: {
            region: "Beqaa",
            country: "LB",
          },
          gpa: 3.5,
        },
      ],
    });
    console.log(result);
  }

  public static async getStudent1() {
    const result = await prisma.student.findMany();
    console.log(result);
  }

  public static async getStudent2() {
    // findUnique used for unique keys with @unique keyword like  id, email...
    const result = await prisma.student.findUnique({
      where: {
        email: "houssein@example.com",
      },
    });
    console.log(result);
  }

  public static async getStudent3() {
    // findUnique used for unique keys with @unique keyword like  id, email...
    const result = await prisma.student.findUnique({
      where: {
        email: "houssein@example.com",
      },
      include: {
        studentHealthProfile: true,
      },
    });
    console.log(result);
  }

  public static async getStudent4() {
    // findUnique used for unique keys with @unique keyword like  id, email...
    const result = await prisma.student.findUnique({
      where: {
        email: "houssein@example.com",
      },
      select: {
        id: true,
        email: true,
        name: true,
        studentHealthProfile: {
          select: {
            id: true,
          },
        },
      },
    });
    console.log(result);
  }

  public static async getStudent5() {
    const result = await prisma.student.findUnique({
      where: {
        age_name: {
          age: 23,
          name: "houssein",
        },
      },
    });
    console.log(result);
  }

  public static async getStudent6() {
    const result = await prisma.student.findFirst({
      where: {
        name: "houssein",
      },
    });
    console.log(result);
  }

  public static async getStudent7() {
    const result = await prisma.student.findMany({
      distinct: ["name"], // Returns all students with distinct on name
    });
    console.log(result);
  }

  public static async getStudent8() {
    const result = await prisma.student.findMany({
      distinct: ["name", "age"], // Returns all students with distinct on name and age
    });
    console.log(result);
  }

  public static async getStudent9() {
    const result = await prisma.student.findMany({
      take: 1, // like limit
    });
    console.log(result);
  }

  public static async getStudent10() {
    const result = await prisma.student.findMany({
      skip: 1, // skip first one
      take: 2, // Take other 2
    });
    console.log(result);
  }

  public static async getStudent11() {
    const result = await prisma.student.findMany({
      orderBy: {
        age: "asc", // or desc
      },
    });
    console.log(result);
  }

  public static async getStudent12() {
    const result = await prisma.student.findMany({
      where: {
        name: {
          equals: "houssein",
        },
      },
    });
    console.log(result);
  }

  public static async getStudent13() {
    const result = await prisma.student.findMany({
      where: {
        name: {
          not: "houssein",
        },
      },
    });
    console.log(result);
  }

  public static async getStudent14() {
    const result = await prisma.student.findMany({
      where: {
        name: {
          in: ["houssein", "Hasssan"],
        },
      },
    });
    console.log(result);
  }

  public static async getStudent15() {
    const result = await prisma.student.findMany({
      where: {
        name: {
          notIn: ["houssein", "hassan"],
        },
      },
    });
    console.log(result);
  }

  public static async getStudent16() {
    const result = await prisma.student.findMany({
      where: {
        age: {
          lt: 23,
        },
      },
    });
    console.log(result);
  }

  public static async getStudent17() {
    const result = await prisma.student.findMany({
      where: {
        age: {
          lte: 23,
        },
      },
    });
    console.log(result);
  }

  public static async getStudent18() {
    const result = await prisma.student.findMany({
      where: {
        age: {
          gt: 23,
        },
      },
    });
    console.log(result);
  }

  public static async getStudent19() {
    const result = await prisma.student.findMany({
      where: {
        age: {
          gte: 23,
        },
      },
    });
    console.log(result);
  }

  public static async getStudent20() {
    const result = await prisma.student.findMany({
      where: {
        email: {
          contains: "@example.com",
        },
      },
    });
    console.log(result);
  }

  public static async getStudent21() {
    const result = await prisma.student.findMany({
      where: {
        email: {
          startsWith: "hou",
        },
      },
    });
    console.log(result);
  }

  public static async getStudent22() {
    const result = await prisma.student.findMany({
      where: {
        email: {
          startsWith: "@example.com",
        },
      },
    });
    console.log(result);
  }

  public static async getStudent23() {
    const result = await prisma.student.findMany({
      where: {
        AND: [
          {
            email: {
              startsWith: "hou",
            },
          },
          {
            email: {
              startsWith: ".com",
            },
          },
        ],
      },
    });
    console.log(result);
  }

  public static async getStudent24() {
    const result = await prisma.student.findMany({
      where: {
        OR: [
          {
            email: {
              startsWith: "hou",
            },
          },
          {
            age: {
              lt: 14,
            },
          },
        ],
      },
    });
    console.log(result);
  }

  public static async getStudent25() {
    const result = await prisma.student.findMany({
      where: {
        NOT: [
          {
            email: {
              startsWith: "hou",
            },
          },
        ],
      },
    });
    console.log(result);
  }

  public static async getStudent26() {
    const result = await prisma.student.findMany({
      where: {
        studentHealthProfile: {
          blood_type: "B_P",
        },
      },
    });
    console.log(result);
  }

  public static async getStudent27() {
    const result = await prisma.student.findMany({
      where: {
        phones: {
          every: {
            // Get me all students where all their phone name match this query
            name: "X",
          },
        },
      },
    });
    console.log(result);
  }

  public static async getStudent28() {
    const result = await prisma.student.findMany({
      where: {
        phones: {
          some: {
            // Get me all students where all some of their phone name match this query
            name: "X",
          },
        },
      },
    });
    console.log(result);
  }

  public static async getStudent29() {
    const result = await prisma.student.findMany({
      where: {
        phones: {
          none: {
            // Get me all students where none of their phone name match this query
            name: "X",
          },
        },
      },
    });
    console.log(result);
  }

  public static async getPhone1() {
    // Get me the phones where their students age are less than or equal to 20
    const result = await prisma.phone.findMany({
      where: {
        student: {
          is: {
            age: { lte: 20 },
          },
        },
      },
    });
    console.log(result);
  }

  public static async getPhone2() {
    // Get me te phones where their students age are greater than to 20
    const result = await prisma.phone.findMany({
      where: {
        student: {
          isNot: {
            age: { lte: 20 },
          },
        },
      },
    });
    console.log(result);
  }

  public static async update1() {
    try {
      // This will update first appearence for unique values
      const result = await prisma.student.update({
        where: {
          email: "houssein@example.com",
        },
        data: {
          email: "houssein.new@example.com",
        },
      });
      console.log(result);
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === "P2025"
      ) {
        console.log("Student not found");
      } else {
        console.log(e);
      }
    }
  }

  public static async update2() {
    try {
      const result = await prisma.student.update({
        where: {
          email: "houssein@example.com",
        },
        data: {
          age: { increment: 1 }, // Increment age by 1 - You can use decrement, multiply, divide...
        },
      });
      console.log(result);
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === "P2025"
      ) {
        console.log("Student not found");
      } else {
        console.log(e);
      }
    }
  }

  public static async update3() {
    try {
      const result = await prisma.student.update({
        where: {
          email: "houssein@example.com",
        },
        data: {
          age: { decrement: 1 }, // Decrement age by 1
        },
      });
      console.log(result);
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === "P2025"
      ) {
        console.log("Student not found");
      } else {
        console.log(e);
      }
    }
  }

  public static async update4() {
    // This will update all appearences for all value
    // You can't use include or select
    const result = await prisma.student.updateMany({
      where: {
        name: "houssein",
      },
      data: {
        email: "houssein.new",
      },
    });
    console.log(result);
  }

  // Connect
  public static async connect() {
    const result = await prisma.student.update({
      where: {
        email: "houssein@example.com",
      },
      data: {
        studentHealthProfile: {
          connect: {
            id: "someuuidhere", // Connect the student with a student health profile with this uuid
          },
        },
      },
    });
    console.log(result);
  }

  // disconnect
  public static async disconnect() {
    const result = await prisma.student.update({
      where: {
        email: "houssein@example.com",
      },
      data: {
        studentHealthProfile: {
          disconnect: {
            id: "someuuidhere", // Disconnect the student with a student health profile with this uuid
          },
        },
      },
    });
    console.log(result);
  }

  // Delete
  public static async delete1() {
    try {
      // Only for unique fields like email, id...
      const result = await prisma.student.delete({
        where: {
          email: "houssein.new@example.com",
        },
      });
      console.log(result);
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === "P2025"
      ) {
        console.log("Student not found");
      } else {
        console.log(e);
      }
    }
  }

  public static async delete2() {
    const result = await prisma.student.deleteMany({
      where: {
        name: "houssein", // Delete all students with name houssein
      },
    });
    console.log(result);
  }

  public static async delete3() {
    const result = await prisma.studentHealthProfile.deleteMany();
    console.log(result);
  }

  public static async delete4() {
    const result = await prisma.student.deleteMany();
    console.log(result);
  }
}

export default Model;

// Note:
// include means: "Give me everything about the student, plus fetch and attach their related records (like healthprofile, courses) in the same result." Without include, Prisma returns the student by themselves without their relationships.
// select means: "Only give me these specific fields I asked for, and ignore everything else." You use select when you want to filter out columns you don't care about to keep your data lightweight.
// You can't use include and select together
