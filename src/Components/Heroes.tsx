function Heroes({ hero }: any) {
  return (
    <div className="h-[40dvh] bg-[url('/src/assets/banner.jpg')] bg-center flex items-end justify-center">
      <h1 className="text-3xl text-white font-Montserrat py-8 font-semibold">
        {hero}
      </h1>
    </div>
  )
}

export default Heroes
