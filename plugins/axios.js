export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    const token = JSON.parse(localStorage.getItem('accessToken'));

    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return config;
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);

    if (code === 401) {
      redirect('/auth/login');
    }
  });
}
