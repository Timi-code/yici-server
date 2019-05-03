import { IsNotEmpty, IsString } from "class-validator";

export class ListDto {
    @IsNotEmpty()
    @IsString()
    currentPage: string;

    @IsNotEmpty()
    @IsString()
    pageSize: string;
    search?: string | string[];
    sort?: 'ASC' | 'DESC';
}