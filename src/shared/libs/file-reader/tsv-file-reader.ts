import { FileReader } from "./file-reader.interface.js";
import { readFileSync } from "node:fs";
import { Offer, Cities } from "../../types/index.js";

export class TSVFileReader implements FileReader {
  private rawData = "";

  constructor(private readonly filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: "utf-8" });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error("File was not read");
    }

    return this.rawData
      .split("\n")
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split("\t"))
      .map(
        ([
          name,
          describe,
          create_data,
          city,
          preview_image,
          images,
          premium,
          favorite,
          rating,
          bedrooms,
          guests,
          amenities,
          autor,
          comments_count,
          coordinates,
        ]) => {
          const [latatude, longitude] = coordinates.split(",");

          return {
            name,
            describe,
            create_data: new Date(create_data),
            city: city as Cities,
            preview_image,
            images: images.split("|"),
            premium: !!premium,
            favorite: !!favorite,
            rating: Number(rating),
            bedrooms: Number(bedrooms),
            guests: Number(guests),
            amenities: amenities.split("|"),
            autor,
            comments_count: Number(comments_count),
            coordinates: {
              latatude: Number(latatude),
              longitude: Number(longitude),
            },
          };
        }
      );
  }
}
