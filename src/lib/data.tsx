/* eslint-disable react/no-unescaped-entities */
type Data = {
  Question: React.ReactElement;
  Reply: React.ReactElement;
}[];

export const data: Data = [
  {
    Question: <p>What do you want to learn or do more of at work?</p>,
    Reply: (
      <article>
        <p>
          For several years now, my passion for web development has grown
          stronger and stronger.
        </p>
        <p>
          I have been striving on using my development skills, combined with
          deep product and industry knowledge, as well as imagination, to solve
          customer issues and questions.
        </p>
        <p>
          I wish to keep learning and share this knowledge and passion with
          customers through my work in Customer Success.
        </p>
        <p>
          I believe working as a Senior Customer Success Engineer for Vercel
          would provide the ideal environment for me to achieve my goals.
        </p>
      </article>
    ),
  },
  {
    Question: (
      <p>
        Describe how you solved a challenge or technical issue that you faced in
        a previous role (preferably in a previous support role). How did you
        determine that your solution was successful?
      </p>
    ),
    Reply: (
      <article>
        <p>
          When I first joined Menlo Security, and to this day, one of the main
          issues customers have been facing involve what we internally call
          "split transaction", a mix of isolated and proxied requests and
          resources.
        </p>
        <p>
          Within 3 months, I had identified efficient and accurate ways to
          detect these and took the initiative to build a web application
          designed to highlight such issues based on data recorded in a HAR
          file, and provide recommendation on ways to resolve the issue via
          amendments to a customer's policy.
        </p>
        <p>
          In order to provide more accurate and thorough recommendations, I
          quickly migrated the tool to a browser extension, allowing for more
          data sources (backend logs and customer policy) to be ingested and
          analyzed.
        </p>
        <p>
          This resulted in all customers having the ability to investigate,
          troubleshoot and resolve issues deeply impacting productivity through
          a self-serving solution, and considerably reduced the amount of
          tickets that made their way to the Customer Support team.
        </p>
        <p>
          This has freed up the Customer Support team to focus on other issues,
          and has also helped customers, as well as Junior team members and new
          starters, to learn more about the product.
        </p>
        <p>
          The impact of this tool in the past few years has been such that
          resources within the Engineering organization are now being allocated
          to fully integrate the tool in the product.
        </p>
        <p>
          I am extremely proud of the work I have done on this project, and I
          am confident that it will continue to benefit customers and Menlo
          Security in the future.
        </p>
      </article>
    ),
  },
  {
    Question: (
      <p>
        How would you compare Next.js with another frontend framework? Feel free
        to compare with a framework of your choice.
      </p>
    ),
    Reply: (
      <article>
        <p>
          Next.js is what is called a meta-framework built on top of React, a
          Javascript UI library, to provide additional features and
          functionality, and was designed to make it easier to develop fast and
          scalable web applications using the Javascript and React ecosystem.
        </p>
        <p>
          It can be compared to other meta-frameworks such as Remix (which also
          builds on top of React), SvelteKit (Svelte) or Nuxt (Vue).
        </p>
        <p>
          Some common features include providing an enhanced developer
          experience, through built-in features such as routing, authentication,
          or data fetching mechanism, as well as better SEO through server-side
          rendering or static site generation, compared to client-side rendered
          single-page applications which were becoming the norm before the
          emergence of such meta-frameworks.
        </p>
        <p>
          These frameworks each provide their own opinionated way to solve the
          aforementioned problems as a frontend or fullstack developer, such as
          the different ways to define routes, the default rendering and
          hydration strategies, or the handling of form submissions.
        </p>
        <p>
          Having more opinionated frameworks helps in reducing decision fatigue,
          enforcing style guides and best practices among teams, and finding
          more accurate documentation and resources online.
        </p>
      </article>
    ),
  },
  {
    Question: (
      <p>
        When would you choose to use Edge Functions, Serverless Functions, or
        Edge Middleware with Vercel?
      </p>
    ),
    Reply: (
      <article>
        <p>
          Edge functions have the ability to run code that compiles to
          WebAssembly, making it ideal for developers and companies using
          lower-level languages such as C or Rust.
        </p>
        <p>
          They are lightweight, and, because they have no cold boot, provide
          lower latency than Serverless Functions. Another benefit of Edge
          Functions is their proximity to the users, further increasing the
          speed at which requests can be processed and responses sent back.
        </p>
        <p>
          Drawbacks include access to a limited set of Node.js APIs, the
          inability to execute dynamic code, limited RAM usage, code size, and
          requests size (headers, body, URL length, etc.).
        </p>
        <p>
          When it comes to Serverless Functions, they can be deployed to one or
          more regions, with the downside of increased latency for users located
          far from where the function is executed.
        </p>
        <p>
          They are ideal when performing heavier workloads, can be automatically
          scaled up or down, and officially support different runtimes (Node.js,
          Edge, Python, etc.), as well as additional runtimes created by the
          Vercel community.
        </p>
        <p>
          They also provide full support for all Node.js APIs, as well as
          standard Web APIs.
        </p>
        <p>
          Let's now talk about Edge Middleware, which is code that is executed
          before a request is processed by either Edge Functions or Serverless
          Functions, and provides access to a subset of Web Standard APIs such
          FetchEvent, Response, and Request.
        </p>
        <p>
          It is useful when one needs to run code that modifies a request and
          its response before the cache, such as performing redirects, modifying
          headers, or executing custom logic.
        </p>
      </article>
    ),
  },
  {
    Question: (
      <p>
        Imagine a customer writes in requesting help with a build issue on a
        framework or technology that you've not seen before. How would you go
        about troubleshooting this and what questions would you ask the customer
        to understand the situation better?
      </p>
    ),
    Reply: (
      <article>
        <p>
          I would first start by gathering as much information as possible
          regarding the customer's code, for example the error or errors
          returned during the build process, what initial troubleshooting steps
          they have performed prior to opening the ticket, as well as specific
          versions for the runtime, framework and 3rd-party libraries they use,
          and whether the build completes successfully in their local
          environment. If the project is open-source or the customer is happy
          sharing their code, I would try and replicate the issue based off of
          their own code.
        </p>
        <p>
          Otherwise, based on the information provided, I would then write a
          minimalistic project using these, try to replicate the issue on my
          end, and share my findings with the customer.
        </p>
        <p>
          If the build succeeds, I would get back to the customer with this
          information, and ask them if they have ever been able to successfully
          build this project in the past, meaning a recent change breaking the
          build process should be easy to identify.
        </p>
        <p>
          If this is not the case, I would ask the customer to try and build my
          test project on their end to eliminate the possibility of an issue in
          their environment.
        </p>
      </article>
    ),
  },
  {
    Question: (
      <>
        <p>
          The customer from question 5 replies to your response with the below:
        </p>
        <blockquote>
          “I’m so frustrated. I’ve been trying to make this work for hours and I
          just can’t figure it out. It must be a platform issue so why don't you
          just fix it for me instead of asking me questions.”
        </blockquote>
        <p>Please write a follow-up reply to the customer.</p>
      </>
    ),
    Reply: (
      <article>
        <h3>
          **If the information provided was sufficient for me to investigate
          further**
        </h3>
        <p>Dear Scott,</p>
        <p>Thank you for the update.</p>
        <p>
          Based on the information you have provided, I was able to reproduce
          the issue you have been facing, and noticed some libraries you are
          using do not meet the minimum requirements.
        </p>
        <p>
          After bumping library "A" to version 2.1, as stated in library's "B"
          documentation, I was able to get a successful build, both in my dev
          environment and on the Vercel platform.
        </p>
        <p>
          Can you please try and perform the same changes and let me know if
          this resolves your issues?
        </p>
        <p>Many thanks.</p>
        <p>
          Regards,<br></br>
          Nick
        </p>
        <h3>**Otherwise**</h3>
        <p>Dear Scott,</p>
        <p>Thank you for the update.</p>
        <p>
          Unfortunately, the information I have at hand is not sufficient for us
          to investigate further. I'd be more than happy to jump on a call to
          have a closer look at your issue and try and work with you to get to a
          successful and timely resolution.
        </p>
        <p>
          If my investigation points to a platform issue, I will need to collect
          some relevant data to pass it back to your Engineering team for them
          to fix this issue for you.
        </p>
        <p>Many thanks.</p>
        <p>
          Regards,<br></br>
          Nick
        </p>
      </article>
    ),
  },
  {
    Question: (
      <p>
        A customer has a project on Vercel and they want to redirect the /blog
        path to another website. Please write a reply to the customer.
        Separately, list any relevant documentation you found and any feedback
        or information you’d like to share about your decision making process.
      </p>
    ),
    Reply: (
      <article>
        <p>Dear Scott,</p>
        <p>Thank you for logging this ticket.</p>
        <p>
          Based on your description of the issue, I believe combining the Edge
          Middleware and Edge Config would be the most efficient solution.
        </p>
        <p>
          Because Edge Middleware runs on a backend close to your users and as
          soon as a request is received, it provides the lowest latency.
        </p>
        <p>
          You can find more information in the documentation linked below, as
          well as a full example:
        </p>
        <ul>
          <li>
            <a
              target='_blank'
              href='https://vercel.com/docs/functions/edge-middleware/middleware-api'
            >
              Edge Middleware
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://vercel.com/docs/storage/edge-config'
            >
              Edge Config
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://vercel.com/templates/next.js/maintenance-page'
            >
              Example
            </a>
          </li>
        </ul>
        <p>I hope this helps.</p>
        <p>Many thanks.</p>
        <p>
          Regards,<br></br>
          Nick
        </p>
      </article>
    ),
  },
  {
    Question: (
      <p>
        A customer is creating a site and would like their project not to be
        indexed by search engines. Please write a reply to the customer.
        Separately, list any relevant documentation you found and any feedback
        or information you’d like to share about your decision making process.
      </p>
    ),
    Reply: (
      <article>
        <p>Dear Scott,</p>
        <p>Thank you for logging this ticket.</p>
        <p>
          In order to prevent search engines from indexing web pages, developers
          can use what is called a "robots.txt" file.
        </p>
        <p>
          This file is read by search engines crawlers and contains instruction
          these crawlers then apply to your site.
        </p>
        <p>
          In your case, since you wish to prevent all search engines from
          indexing any page on your site, I would suggest the following
          configuration:
          <hr />
          <div>
            # Block all crawlers for /<br />
            User-agent: *<br />
            Disallow: /
          </div>
          <hr />
        </p>

        <p>
          You can also find more details regarding the "robots.txt" file in the
          links below:
        </p>
        <ul>
          <li>
            <a
              target='_blank'
              href='https://nextjs.org/learn/seo/crawling-and-indexing/robots-txt'
            >
              Crawling and Indexing - Next.js
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://developer.mozilla.org/en-US/docs/Glossary/Robots.txt'
            >
              Mozilla Developer Network
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag'
            >
              Google for Developers
            </a>
          </li>
        </ul>
        <p>I hope this helps.</p>
        <p>Many thanks.</p>
        <p>
          Regards,<br></br>
          Nick
        </p>
      </article>
    ),
  },
  {
    Question: (
      <p>
        What do you think is one of the most common problems which customers ask
        Vercel for help with? How would you help customers to overcome common
        problems, short-term and long-term?
      </p>
    ),
    Reply: (
      <article>
        <p>
          This is a hard one, but in cases where a customer uses Vercel to
          deploy Next.js applications, my guess would be questions around
          migrating from the Pages Router to the App Router.
        </p>
        <p>
          For other customers, I would imagine questions around software
          architecture, such as which services are most appropriate for their
          use case, and performance, such as caching strategies, would be
          common.
        </p>
      </article>
    ),
  },
  {
    Question: (
      <p>How could we improve or alter this familiarization exercise?</p>
    ),
    Reply: (
      <article>
        <p>
          This would be though in the 3-hour time limit suggested, but asking
          candidates to use other Vercel services, such as one of Vercel's
          Storage solution, or implementing an API route that uses Serverless
          Functions, would be a great exercise.
        </p>
        <p>Personally, it's been a great pleasure to take part in this assessment. Thank you for your attention.</p>
      </article>
    ),
  },
];
