import { Shell, CallButton, SiteButton } from '@/components/ui';
import { A } from '@/lib/site';
import { pageGraph } from '@/lib/schema';

export const metadata = { title: { absolute: 'Page not found | Advocate Rajesh Kumar Reddy, Kadapa' } };

export default function NotFound() {
  return (
    <Shell path="/404" graph={pageGraph({ path: '/404', title: 'Page not found', description: 'This page does not exist.' })}>
      <section className="hero wide">
        <div className="wrap">
          <div>
            <h1>This page doesn’t exist</h1>
            <p className="lede">
              The link may be old or mistyped. Go to the <a href="/">Advocate Rajesh Kumar Reddy page</a> or call the office on {A.phone.display}.
            </p>
            <div className="actions">
              <CallButton />
              <SiteButton />
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
