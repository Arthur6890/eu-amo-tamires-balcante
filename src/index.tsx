import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './routes/home/index.page';
import { IntruderPage } from 'routes/intruder/index.page';
import { LoadingPage } from 'routes/loading/index.page';
import { RealOnePage } from 'routes/real-one/index.page';
import Gallery from 'routes/gallery/index.page';
import { VideoPage } from 'routes/video/index.page';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "intruder",
		element: <IntruderPage />
	},
	{
		path: "loading",
		element: <LoadingPage />
	},
	{
		path: "real-one",
		element: <RealOnePage />
	},
	{
		path: "gallery",
		element: <Gallery />
	},
	{
		path: "video",
		element: <VideoPage />
	}
])

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

