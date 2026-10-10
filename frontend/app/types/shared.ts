export type CreateUserRequest = {
  username: string;
  password: string;
};


export type User = {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
}; 


//ACCOUNT
export type AccountID = string;

export type Account = {
  id: AccountID;
  userId: number;
  amount: number;
};

export type AccountResponse = {
  amount: number;
};

export type AccountNotification = {
  firstTimeMsg: string;
  subsequentMsg: string;
} 


//SESSION
export type Sessions = {
  userId: number;
  token: string;
}

export type LoginRequest = {
  username: string;
  password: string;
};

// export type LoginResponse = {
//   token: string;
// };
export type LoginResponse = {
  session: {
    id: number;
    user_id: number;
    token: string;
  };
};


//TRANSACTIONS
export type TransactionRequest = {
  token: string;
  amount: number;
};

export type TransactionResponse = {
  amount: number;
};