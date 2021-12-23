import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Digital Guide Latest Tech News Update" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    <h1>Digital Guide</h1>
        
        Visit official website of <a href="https://Digitaleguide.com">https://Digitaleguide.com</a>

<p>A Bit About Us.</p>
<p>Digitaleduide.com has been helping people pay their bills online since 2003..</p>
<p>We provide detailed credit card and bill payment information from banks such as Bank of America, American Express, Citibank, etc, as well as US based retail store credit cards such as The Limited, Macy’s, Lowe’s, Home Depot, etc. </p>
<p>We also provide bill pay information for utility companies, insurance companies, mortgage lenders, cable and wireless providers, and just about any company that charges a bill.</p>
<p>Digitaleguide.com conveniently list account login info, customer service 800 numbers, pay-by-phone numbers, and account mailing addresses. https://digitaleguide.com also provides video tutorials showing you how to quickly and easily navigate a biller’s website in order to pay your bill.

The reason for this site is simple. Because there is so much competitive marketing information from one company to the next, many times a large company will unknowingly or unintentionally bury important information on its website making it difficult for its customer to find the information and pay their bills in a timely fashion.

Digitaleguide.com provides this important information along with a bit about the various credit programs so that you can quickly contact the relevant company, resolve any issue you may have, or make your bill payment on time and avoid costly late fees. </p>
        
<p>The credit card industry alone takes in over $10 billion in penalty fees (late fees, over limit fees, etc.) each year.</p>

            <h2>Customer Care</h2>
If you have any additional information regarding a company that you believe would be helpful to visitors, please send us a message by posting a comment.

            <h2>Credit Card Customer Care</h2>
company whose payment info is hard to find, please let us know!
Get Free Credit Updates!

      <Footer />
    </div>
  )
}
