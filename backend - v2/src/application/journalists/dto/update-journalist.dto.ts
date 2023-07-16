import { PartialType } from '@nestjs/mapped-types';
import { CreateJournalistDTO } from './create-journalist.dto';

export class UpdateJournalistDto extends PartialType(CreateJournalistDTO) {}
