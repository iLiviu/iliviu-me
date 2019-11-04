import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import ProductListPagePreview from './preview-templates/ProductListPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'


CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('products', ProductListPagePreview)
CMS.registerPreviewTemplate('product', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
