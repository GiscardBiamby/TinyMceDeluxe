﻿using Orchard.UI.Resources;

namespace TinyMceDeluxe {
    public class ResourceManifest : IResourceManifestProvider {
        public void BuildManifests(ResourceManifestBuilder builder) {
            var manifest = builder.Add();
            manifest.DefineScript("TinyMceDeluxe").SetUrl("tiny_mce.js", "tiny_mce_src.js").SetVersion("3.5.7");
            manifest.DefineScript("OrchardTinyMceDeluxe").SetUrl("orchard-tinymce.js").SetDependencies("TinyMceDeluxe");
        }

    }
}