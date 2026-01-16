import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = typeof window !== 'undefined' && localStorage.getItem('adminToken');
    if (!token) {
      router.replace('/admin/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  return { loading };
}
