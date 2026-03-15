export default function HeroSection() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <img
        src="/assets/generated/hero-banner.dim_1920x600.png"
        alt="Ayurveda Silk Khadi Pashmina"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
              Timeless Elegance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover the luxurious softness of authentic Ayurveda silk khadi
              pashmina. Each piece is a masterpiece of traditional
              craftsmanship, woven with care and heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
