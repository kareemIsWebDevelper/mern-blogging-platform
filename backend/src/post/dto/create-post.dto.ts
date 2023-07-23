export class CreatePostDto {
  title: string;
  body: string;
}

export class UpdatePostDto {
  title?: string;
  body?: string;
}
