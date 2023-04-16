import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateLeasonDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  name: string

  @MaxLength(100)
  description?: string
}
