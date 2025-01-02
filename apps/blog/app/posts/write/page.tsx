import PostForm from "./_components/post-form";

export default function WritePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">새 게시글 작성</h1>
      <PostForm />
    </div>
  );
}
