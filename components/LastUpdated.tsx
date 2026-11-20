'use client';

import moment from 'moment';
import { useEffect, useState } from 'react';

export default function LastUpdated({ at }: { at: string }) {
  const [, tick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => tick((n) => n + 1), 60_000);
    return () => clearInterval(id);
  }, []);
  return <p className="muted">Data last updated {moment(at).fromNow()}</p>;
}
