export interface AccountBalance {
  type: string;
  amount: number;
}

export interface AccountDetail {
  nickname?: string;
  accountNumber?: string;
  accountType?: string;
  ownerName?: string;
  openDate?: Date;
  alternateAccountNumber?: string;
  balances?: AccountBalance[];
}
