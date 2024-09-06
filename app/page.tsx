import { MiniPlayer } from '@/components/mini-player';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Card className="group">
          <CardContent className="flex h-40 items-center justify-center bg-muted/50 transition-colors group-hover:bg-muted">
            <img
              src="/placeholder.svg"
              width={200}
              height={200}
              alt="Album Cover"
              className="h-32 w-32 rounded-md object-cover"
              style={{ aspectRatio: '200/200', objectFit: 'cover' }}
            />
          </CardContent>
          <CardFooter className="mt-2">
            <div className="line-clamp-1 text-sm font-medium">
              Melodic Bliss
            </div>
            <div className="line-clamp-1 text-xs text-muted-foreground">
              Acme Music
            </div>
          </CardFooter>
        </Card>
        <Card className="group">
          <CardContent className="flex h-40 items-center justify-center bg-muted/50 transition-colors group-hover:bg-muted">
            <img
              src="/placeholder.svg"
              width={200}
              height={200}
              alt="Album Cover"
              className="h-32 w-32 rounded-md object-cover"
              style={{ aspectRatio: '200/200', objectFit: 'cover' }}
            />
          </CardContent>
          <CardFooter className="mt-2">
            <div className="line-clamp-1 text-sm font-medium">
              Rhythm & Blues
            </div>
            <div className="line-clamp-1 text-xs text-muted-foreground">
              Acme Music
            </div>
          </CardFooter>
        </Card>
        <Card className="group">
          <CardContent className="flex h-40 items-center justify-center bg-muted/50 transition-colors group-hover:bg-muted">
            <img
              src="/placeholder.svg"
              width={200}
              height={200}
              alt="Album Cover"
              className="h-32 w-32 rounded-md object-cover"
              style={{ aspectRatio: '200/200', objectFit: 'cover' }}
            />
          </CardContent>
          <CardFooter className="mt-2">
            <div className="line-clamp-1 text-sm font-medium">Synth Waves</div>
            <div className="line-clamp-1 text-xs text-muted-foreground">
              Acme Music
            </div>
          </CardFooter>
        </Card>
        <Card className="group">
          <CardContent className="flex h-40 items-center justify-center bg-muted/50 transition-colors group-hover:bg-muted">
            <img
              src="/placeholder.svg"
              width={200}
              height={200}
              alt="Album Cover"
              className="h-32 w-32 rounded-md object-cover"
              style={{ aspectRatio: '200/200', objectFit: 'cover' }}
            />
          </CardContent>
          <CardFooter className="mt-2">
            <div className="line-clamp-1 text-sm font-medium">
              Chillwave Vibes
            </div>
            <div className="line-clamp-1 text-xs text-muted-foreground">
              Acme Music
            </div>
          </CardFooter>
        </Card>
        <Card className="group">
          <CardContent className="flex h-40 items-center justify-center bg-muted/50 transition-colors group-hover:bg-muted">
            <img
              src="/placeholder.svg"
              width={200}
              height={200}
              alt="Album Cover"
              className="h-32 w-32 rounded-md object-cover"
              style={{ aspectRatio: '200/200', objectFit: 'cover' }}
            />
          </CardContent>
          <CardFooter className="mt-2">
            <div className="line-clamp-1 text-sm font-medium">Indie Gems</div>
            <div className="line-clamp-1 text-xs text-muted-foreground">
              Acme Music
            </div>
          </CardFooter>
        </Card>
        <Card className="group">
          <CardContent className="flex h-40 items-center justify-center bg-muted/50 transition-colors group-hover:bg-muted">
            <img
              src="/placeholder.svg"
              width={200}
              height={200}
              alt="Album Cover"
              className="h-32 w-32 rounded-md object-cover"
              style={{ aspectRatio: '200/200', objectFit: 'cover' }}
            />
          </CardContent>
          <CardFooter className="mt-2">
            <div className="line-clamp-1 text-sm font-medium">Retro Beats</div>
            <div className="line-clamp-1 text-xs text-muted-foreground">
              Acme Music
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
