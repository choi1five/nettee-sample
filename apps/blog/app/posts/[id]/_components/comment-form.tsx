"use client";

import { Button } from "@nettee-sample/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@nettee-sample/ui/components/card";
import { Input } from "@nettee-sample/ui/components/input";
import { Textarea } from "@nettee-sample/ui/components/textarea";
import { useRef } from "react";

import { createComment } from "../_actions";

interface Props {
  postId: string;
}

export default function CommentForm({ postId }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-lg">댓글 작성</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          ref={formRef}
          action={async (formData: FormData) => {
            await createComment(null, formData);
            formRef.current?.reset();
          }}
          className="space-y-4"
        >
          <input name="postId" value={postId} hidden readOnly />
          <Textarea
            name="content"
            placeholder="댓글을 입력하세요"
            required
            className="resize-none min-h-[100px]"
          />
          <div className="flex items-center gap-4">
            <Input
              name="author"
              placeholder="작성자"
              required
              className="max-w-[200px]"
            />
            <Button type="submit" className="w-24">
              댓글 달기
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}