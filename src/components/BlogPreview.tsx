import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Maintaining Your Fade",
    excerpt: "Learn professional tips to keep your fade looking fresh between barbershop visits.",
    author: "Jeff Williams",
    date: "2024-01-15",
    category: "Men's Grooming",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Dreadlock Care: Essential Tips for Healthy Locs",
    excerpt: "Everything you need to know about proper dreadlock maintenance and styling.",
    author: "Sarah Johnson",
    date: "2024-01-10",
    category: "Dreadlock Care",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Making Haircuts Fun for Kids: A Parent's Guide",
    excerpt: "Tips and tricks to help your child have a positive barbershop experience.",
    author: "Mike Thompson",
    date: "2024-01-05",
    category: "Kids Hairstyles",
    readTime: "4 min read"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tips, trends, and expert insights from our professional stylists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span className="bg-secondary text-primary px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group-hover:text-secondary transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button variant="premium" size="lg" className="text-lg px-8">
              Read All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;