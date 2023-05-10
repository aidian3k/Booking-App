export interface ReviewModel {
    content: string,
    rating: number | null,
    date: Date,
    owner: string
}