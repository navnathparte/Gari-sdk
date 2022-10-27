import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateWalletDto {
    @IsNotEmpty()
    @ApiProperty({
      required: true,
      description: 'public key of user',
      example: '',
    })
    publicKey: String;
}
