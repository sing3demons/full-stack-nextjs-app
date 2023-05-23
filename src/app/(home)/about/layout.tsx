
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
      <div>
        <h2>About Layout</h2>
        <hr />
        {children}
      </div>
    );
}
