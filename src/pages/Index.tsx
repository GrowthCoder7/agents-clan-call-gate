import BookACall from "@/components/BookACall";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BookACall calendlyUrl="https://calendly.com/your-calendly-link" />
    </div>
  );
};

export default Index;
