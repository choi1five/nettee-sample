import { Comment } from "@/types";

import CommentForm from "./comment-form";

interface Props {
  postId: string;
  comments: Comment[];
}

export default function CommentSection({ postId, comments }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border rounded-lg p-4">
            <p className="text-slate-600 mb-2">{comment.content}</p>
            <div className="flex justify-between text-sm text-slate-500">
              <span>{comment.author}</span>
              <time>{new Date(comment.createdAt).toLocaleString()}</time>
            </div>
          </div>
        ))}
        {comments.length === 0 && (
          <div className="text-center py-4 text-slate-500">
            첫 댓글을 작성해보세요.
          </div>
        )}
      </div>
      <CommentForm postId={postId} />
    </div>
  );
}
