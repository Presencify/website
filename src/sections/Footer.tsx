import Logo from "@/components/Logo"

const Footer = () => {
  return (
    <section className="w-full h-[100px] bg-dark flex justify-center">
      <div className="w-full max-w-[1200px] flex justify-between items-center border-t border-t-gray-700">
        <Logo />
        <div className="flex gap-5">
          <p>FAQ</p>
          <p>Contact us</p>
          <p>Discord</p>
          <p>Github</p>
          <p>Donate</p>
        </div>
      </div>
    </section>
  )
}
export default Footer
