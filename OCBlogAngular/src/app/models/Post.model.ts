export class Post {
  constructor(
    public titrepost: string,
    public contenupost: string,
    public liker: number,
    public datepost: Promise<Date>
  ) {}
}
