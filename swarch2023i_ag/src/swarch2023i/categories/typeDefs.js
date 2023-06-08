export const scheduledPaymentTypeDef = `
    type ScheduledPayment {
        _id: ID!
        user_id: Int
        name: String
        category_id: Int
        account_id: Int
        payment_method: String
        recipient: String
        frequency: String
        start_date: String
        notification_time: String
        periodicity_config: PeriodicityConfigType
    }

    type PeriodicityConfigType {
        time_unit: String
        time_lapse: Int
        days_of_week: [String]
        until: String
    }
    
    input CreateScheduledPayment {
        user_id: Int
        name: String
        category_id: Int
        account_id: Int
        payment_method: String
        recipient: String
        frequency: String
        start_date: String
        notification_time: String
        periodicity_config: CreatePeriodicityConfigInput
    }
      
    input UpdateScheduledPayment {
        _id: ID!
        user_id: Int
        name: String
        category_id: Int
        account_id: Int
        payment_method: String
        recipient: String
        frequency: String
        start_date: String
        notification_time: String
        periodicity_config: UpdatePeriodicityConfigInput
    }
      
    input DeleteScheduledPayment {
        _id: ID!
    }
        
    input CreatePeriodicityConfigInput {
        time_unit: String
        time_lapse: Int
        days_of_week: [String]
        until: String
    }
      
    input UpdatePeriodicityConfigInput {
        time_unit: String
        time_lapse: Int
        days_of_week: [String]
        until: String
    }`;

export const scheduledPaymentQueries = `
    allScheduledPayments: [ScheduledPayment]
    scheduledPaymentById(_id: ID!): ScheduledPayment!
`;

export const scheduledPaymentMutations = `
    createScheduledPayment(scheduledPayment: CreateScheduledPayment!): ScheduledPayment!
    updateScheduledPayment(_id: ID!, scheduledPayment: CreateScheduledPayment!): ScheduledPayment!
    deleteScheduledPayment(_id: ID!): Int
`;



export const categoryTypeDef = `
  type Category {
      id: Int!
      name: String!
      description: String!
  }
  input CategoryInput {
      name: String!
      description: String!
  }`;

export const categoryQueries = `
      allCategories: [Category]!
      categoryById(id: Int!): Category!
  `;

export const categoryMutations = `
    createCategory(category: CategoryInput!): Category!
    updateCategory(id: Int!, category: CategoryInput!): Category!
    deleteCategory(id: Int!): Int
`;
