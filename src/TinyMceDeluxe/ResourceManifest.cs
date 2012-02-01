using Orchard.UI.Resources;

namespace TinyMceDeluxe {
    public class ResourceManifest : IResourceManifestProvider {
        public void BuildManifests(ResourceManifestBuilder builder) {
            var manifest = builder.Add();

            manifest.DefineScript("TinyMce").SetUrl("tiny_mce.js", "tiny_mce_src.js").SetVersion("3.4.7");
            manifest.DefineScript("TinyMceDeluxePlugins").SetUrl("external-plugin-loader.js").SetDependencies("TinyMce");
        }

    }
}