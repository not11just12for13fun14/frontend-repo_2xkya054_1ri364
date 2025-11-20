import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import Footer from './components/Footer'

const makeLink = (q) => `https://www.amazon.com/s?k=${encodeURIComponent(q)}`

function App() {
  const sections = [
    {
      id: 'sexy-trending',
      title: 'Sexy & Trending Styles',
      description: 'The hottest looks making waves right now — bold, sultry, and head-turning.',
      items: [
        { title: 'Plus Size Plunging Neckline Teddy', link: makeLink('Plus Size Plunging Neckline Teddy') },
        { title: 'Lace Bodysuit Lingerie for Women', link: makeLink('Lace Bodysuit Lingerie for Women') },
        { title: 'Sheer Mesh Lingerie Set', link: makeLink('Sheer Mesh Lingerie Set') },
        { title: 'Open Back Lace Babydoll', link: makeLink('Open Back Lace Babydoll') },
        { title: 'Satin Silk Sleepwear Set', link: makeLink('Satin Silk Sleepwear Set') },
      ],
    },
    {
      id: 'romantic-elegant',
      title: 'Romantic & Elegant Pieces',
      description: 'Soft lace, delicate trims, and refined details for a timeless romantic look.',
      items: [
        { title: 'Floral Lace Chemise Nightgown', link: makeLink('Floral Lace Chemise Nightgown') },
        { title: 'Satin Robe with Lace Trim', link: makeLink('Satin Robe with Lace Trim') },
        { title: 'Lingerie Set with Garter Belt and Stockings', link: makeLink('Lingerie Set with Garter Belt and Stockings') },
        { title: 'Lace Bralette and Panty Set', link: makeLink('Lace Bralette and Panty Set') },
      ],
    },
    {
      id: 'curvy-plus',
      title: 'Curvy & Plus Size Favorites',
      description: 'Flattering fits and gorgeous designs made to celebrate every curve.',
      items: [
        { title: 'Plus Size Lingerie Set with Garter', link: makeLink('Plus Size Lingerie Set with Garter') },
        { title: 'Plus Size Lace Babydoll Sleepwear', link: makeLink('Plus Size Lace Babydoll Sleepwear') },
        { title: 'Plus Size Open Cup Teddy', link: makeLink('Plus Size Open Cup Teddy') },
        { title: 'Plus Size Corset Bustier Top', link: makeLink('Plus Size Corset Bustier Top') },
      ],
    },
    {
      id: 'nightwear',
      title: 'Nightwear & Lounge Luxury',
      description: 'Silky-soft pieces for cozy nights and slow mornings — pure indulgence.',
      items: [
        { title: 'Satin Pajama Set for Women', link: makeLink('Satin Pajama Set for Women') },
        { title: 'Silk Cami and Shorts Set', link: makeLink('Silk Cami and Shorts Set') },
        { title: 'Lace Trim Sleep Dress', link: makeLink('Lace Trim Sleep Dress') },
        { title: 'Luxury Satin Sleepwear', link: makeLink('Luxury Satin Sleepwear') },
      ],
    },
    {
      id: 'special-occasion',
      title: 'Seductive & Special Occasion',
      description: 'Make moments unforgettable with romantic, head-turning designs.',
      items: [
        { title: 'Bridal Lingerie Set White Lace', link: makeLink('Bridal Lingerie Set White Lace') },
        { title: "Valentine’s Day Lingerie", link: makeLink("Valentine’s Day Lingerie") },
        { title: 'Red Lace Teddy Lingerie', link: makeLink('Red Lace Teddy Lingerie') },
        { title: 'Black Strappy Lingerie Set', link: makeLink('Black Strappy Lingerie Set') },
      ],
    },
    {
      id: 'shapewear',
      title: 'Shapewear & Corsets',
      description: 'Sculpting silhouettes and elegant corsetry for a confident fit.',
      items: [
        { title: 'Lace Corset Top', link: makeLink('Lace Corset Top') },
        { title: 'Bustier Corset Lingerie', link: makeLink('Bustier Corset Lingerie') },
        { title: 'Tummy Control Bodysuit Shapewear', link: makeLink('Tummy Control Bodysuit Shapewear') },
        { title: 'Waist Cincher Corset', link: makeLink('Waist Cincher Corset') },
      ],
    },
    {
      id: 'designer',
      title: 'Premium Designer Styles',
      description: 'Iconic labels and refined craftsmanship for the ultimate luxury.',
      items: [
        { title: 'Victoria’s Secret Lingerie', link: makeLink('Victoria’s Secret Lingerie') },
        { title: 'Savage X Fenty Lingerie', link: makeLink('Savage X Fenty Lingerie') },
        { title: 'Luxury Silk Lingerie Set', link: makeLink('Luxury Silk Lingerie Set') },
        { title: 'High-End Lace Bodysuit', link: makeLink('High-End Lace Bodysuit') },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff6f9,transparent_40%),linear-gradient(0deg,#fff7ef,transparent_50%)] text-rose-950">
      <Header />
      <Hero />

      <main id="categories">
        {sections.map((s) => (
          <CategorySection key={s.id} {...s} />
        ))}
      </main>

      <Footer />
    </div>
  )
}

export default App
