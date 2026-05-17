import { Gender } from "../../generated/prisma/enums";

export interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: Gender;
}
