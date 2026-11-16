import { Shell, CallButton, DirectionsButton } from '@/components/ui';
import { H } from '@/lib/site';
import { pageGraph } from '@/lib/schema';

export const metadata = { title: { absolute: 'Page not found | Dhruva Hospitals, Kadapa' } };

export default function NotFound() {
  return (
    <Shell path="/404" graph={pageGraph({ path: '/404', title: 'Page not found', description: 'This page does not exist.' })}>
      <section className="hero wide">
        <div className="wrap">
          <div>
            <h1>This page doesn’t exist</h1>
            <p className="lede">
              The link may be old or mistyped. You can go to the <a href="/">Dhruva Hospitals Kadapa page</a> or call the hospital on {H.phone.display}.
            </p>
            <div className="actions">
              <CallButton />
              <DirectionsButton />
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
