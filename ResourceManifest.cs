using Orchard.UI.Resources;

namespace TinyMceDeluxe {
    public class ResourceManifest : IResourceManifestProvider {
        public void BuildManifests(ResourceManifestBuilder builder) {
            var manifest = builder.Add();
            manifest.DefineScript("TinyMce").SetUrl("tiny_mce.js", "tiny_mce_src.js").SetVersion("3.5.7").SetDependencies("jQuery");
            manifest.DefineScript("TinyMceDeluxe").SetUrl("tinymcedeluxe.orchard.min.js", "tinymcedeluxe.orchard.js").SetDependencies("TinyMce", "jQuery").SetVersion("1.0");
            manifest.DefineScript("OrchardTinyMceDeluxe").SetUrl("orchard-tinymce.js").SetDependencies("TinyMceDeluxe", "jQuery").SetVersion("1.0");
            
            // This is the same as above, but with a different resource name. Just so that if users of this module disable TinyMce and enable TinyMceDeluxe, nothing will break
            // because any code in their site that references "OrchardTinyMce" will still work:
            manifest.DefineScript("OrchardTinyMce").SetUrl("orchard-tinymce.js").SetDependencies("TinyMceDeluxe", "jQuery").SetVersion("1.0");
        }
    }
}