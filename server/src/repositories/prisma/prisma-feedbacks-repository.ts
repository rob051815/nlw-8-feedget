import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";
import { prisma } from "../../prisma";

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        //Short syntax available when key and value have the same name
        type,
        comment,
        screenshot,
      }
    });
  }
}