import { MainLayout } from '@/layouts'
import { SEO, TODO } from '@/components'

const Home = () => {
  return (
    <MainLayout className="container" theme="dark">
      <SEO
        title="TODO"
        description="TODO Description."
        url="todochange.com"
        image=""
        imageAlt=""
      />
      <TODO />
    </MainLayout>
  )
}

export default Home
