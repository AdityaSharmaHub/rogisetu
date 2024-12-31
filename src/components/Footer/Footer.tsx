const Footer = () => {
  return (
    <footer className="bg-muted p-5 border-t border-t-muted-foreground/15">
      <p className="text-center">&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  )
}

export default Footer