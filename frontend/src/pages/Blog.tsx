import LoadingBounce from "@/components/LoadingBounce";
import ComingSoon from "@/components/ui/ComingSoon";

const Blog = () => {
  return (
    <div className=" relative h-screen w-full flex flex-col gap-4 justify-center items-center">
      <ComingSoon message="Blog page is coming soon" />
      <LoadingBounce text="Blog page is coming soon" />
    </div>
  );
};
export default Blog;
