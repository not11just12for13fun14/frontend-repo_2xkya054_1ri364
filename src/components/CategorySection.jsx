import React from 'react'

const ProductCard = ({ title, link }) => (
  <div className="group bg-white/80 backdrop-blur rounded-2xl p-4 sm:p-5 border border-rose-100 shadow-sm hover:shadow-md transition-all">
    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-100">
      <img
        src={`https://source.unsplash.com/600x450/?lingerie,fashion,${encodeURIComponent(title)}`}
        alt={title}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="mt-4">
      <h4 className="text-base sm:text-lg font-semibold text-rose-950/90">{title}</h4>
      <p className="mt-1 text-sm text-rose-900/70">Shop Amazon’s best picks for this style.</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center rounded-full bg-rose-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-rose-500 transition-colors"
      >
        Shop Now
      </a>
    </div>
  </div>
)

function CategorySection({ id, title, description, items }) {
  return (
    <section id={id} className="relative py-12 sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,192,203,0.15),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(245,222,179,0.15),transparent_35%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-serif text-rose-950/90">{title}</h3>
          <p className="mt-2 text-rose-900/70 max-w-2xl mx-auto text-sm sm:text-base">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((item) => (
            <ProductCard key={item.title} title={item.title} link={item.link} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
