import { allArticles } from "@/data/articles";
import Articles from "@/components/sections/Articles"

export default function ArticlesPage() {
  return (
    <div className="container mx-auto ">
      <Articles articles={allArticles} />
    </div>
  )
}
