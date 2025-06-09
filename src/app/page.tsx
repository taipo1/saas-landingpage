import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Focus more with Doctor Hoot
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          The Pomodoro technique helps you focus on your tasks by breaking them into intervals.
          It is a time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.
        </Typography>
        <Link
          href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {`Read more about Pomodoro`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="/ancient-egypt-thinker.webp"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Coming soon
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Pomodoro Technique, Perfected"
              description="Work in structured bursts with smart breaks, backed by science. Tailored to your personal rhythm."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Gamified Sessions"
              description="Every completed session earns you progress in Sniper Owl, our built-in focus game."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Minimal, Mature, Effective"
              description="Clean interface. No clutter. Designed to help you think better, not click more."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Why Doctor Hoot?
          </Typography>
          <Typography className="max-w-2xl" variant="p">
Modern life is noisy. Notifications, scrolling, background stress, it all chips away at your focus. Doctor Hoot is here to change that.
Whether you’re studying, coding, writing, or just trying to think, we help you stay sharp and on track.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/why-doctor-hoot.webp"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl font-[60px]" variant="h1">
            HOOT HOOT, MOTHERFUCKER!
          </Typography>
          <div>Pre-register now. work efficient soon.</div>
          <Link
            href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`pre-register`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
