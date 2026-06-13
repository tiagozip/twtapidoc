# Twitter Internal GraphQL API Document<br>
This document is entirely auto-generated and may contain errors.<br>
Static analysis of `variables` is very difficult, so those fields are likely incomplete or wrong.<br>
## Usage<br>
If a parameter is an array type, encode it as JSON.<br>
## AddContentDisclosure<br>
Request URL: `https://x.com/i/api/graphql/D1nwFlsu_qHsX92YzoRaaA/AddContentDisclosure`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## AuthenticatePeriscope<br>
Request URL: `https://x.com/i/api/graphql/r7VUmxbfqNkx7uwjgONSNw/AuthenticatePeriscope`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## getAltTextPromptPreference<br>
Request URL: `https://x.com/i/api/graphql/PFIxTk8owMoZgiMccP0r4g/getAltTextPromptPreference`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## updateAltTextPromptPreference<br>
Request URL: `https://x.com/i/api/graphql/aQKrduk_DA46XfOQDkcEng/updateAltTextPromptPreference`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BakeryQuery<br>
Request URL: `https://x.com/i/api/graphql/pROR-yRiBVsEjJyHt3fvhg/BakeryQuery`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BlockedAccountsAll<br>
Request URL: `https://x.com/i/api/graphql/dXAVNBZjLy9JoZd6JCjc-A/BlockedAccountsAll`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BlockedAccountsImported<br>
Request URL: `https://x.com/i/api/graphql/zUg9jtmTnE1WBM-EZZiNrg/BlockedAccountsImported`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BlueVerifiedFollowers<br>
Request URL: `https://x.com/i/api/graphql/OBBd6Dw-4qEYbsu3hGkyxg/BlueVerifiedFollowers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BookmarkSearchTimeline<br>
Request URL: `https://x.com/i/api/graphql/vqy7GkKMR5TYk8_ysuhmfA/BookmarkSearchTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CombinedLists<br>
Request URL: `https://x.com/i/api/graphql/3U0qQNFb6dcwmkxbWml-fg/CombinedLists`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunitiesExploreTimeline<br>
Request URL: `https://x.com/i/api/graphql/dkAxLX-HyMDJmkkKmIGLxw/CommunitiesExploreTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunitiesMainDiscoveryModule<br>
Request URL: `https://x.com/i/api/graphql/R-5hjsDZdYGg_0o7gn_tRw/CommunitiesMainDiscoveryModule`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunitiesMainPageTimeline<br>
Request URL: `https://x.com/i/api/graphql/931VC3ixbMk_VYYXTWepEw/CommunitiesMainPageTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunitiesMembershipsSlice<br>
Request URL: `https://x.com/i/api/graphql/OI_VJ_Oeq9YYfKIc8_gHPw/CommunitiesMembershipsSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunitiesMembershipsTimeline<br>
Request URL: `https://x.com/i/api/graphql/vHyK5CyW66TYaE135auZTg/CommunitiesMembershipsTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityAboutTimeline<br>
Request URL: `https://x.com/i/api/graphql/js6zU09RGyDxdwTwC8GR-A/CommunityAboutTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CreateCommunity<br>
Request URL: `https://x.com/i/api/graphql/y7-4F5PlFVfy3zWCY1vp3Q/CreateCommunity`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityCreateRule<br>
Request URL: `https://x.com/i/api/graphql/NzKgB8IC6oGsrFMkUZOFUA/CommunityCreateRule`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityDiscoveryTimeline<br>
Request URL: `https://x.com/i/api/graphql/xkvrM0czUYQPbU5eeBM-YQ/CommunityDiscoveryTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityEditBannerMedia<br>
Request URL: `https://x.com/i/api/graphql/nmEE2-ykwhfM_D3mQfeRHw/CommunityEditBannerMedia`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityEditName<br>
Request URL: `https://x.com/i/api/graphql/Da2zfJuj9i2Ajvg4C9XXyA/CommunityEditName`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityEditPurpose<br>
Request URL: `https://x.com/i/api/graphql/HRKiFSryD6D2RONzjzdypg/CommunityEditPurpose`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityEditQuestion<br>
Request URL: `https://x.com/i/api/graphql/tGjrkMr6DZIqgvpFBTWolQ/CommunityEditQuestion`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityEditRule<br>
Request URL: `https://x.com/i/api/graphql/_s0HUhBH2yWtBxMulyqycg/CommunityEditRule`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityByRestId<br>
Request URL: `https://x.com/i/api/graphql/3f2qLb4hqmRLGwsAzCmA_Q/CommunityByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityHashtagsTimeline<br>
Request URL: `https://x.com/i/api/graphql/40DyrMxfCknGuZwE-keW_Q/CommunityHashtagsTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## JoinCommunity<br>
Request URL: `https://x.com/i/api/graphql/8lR4bNpbNZKbmK6MwZtU-Q/JoinCommunity`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## LeaveCommunity<br>
Request URL: `https://x.com/i/api/graphql/0YUrwfndvmPYbgmQxPFySQ/LeaveCommunity`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityMediaLoggedOutTimeline<br>
Request URL: `https://x.com/i/api/graphql/sQAAjH5i6YA6VmSlybi7aw/CommunityMediaLoggedOutTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityMediaTimeline<br>
Request URL: `https://x.com/i/api/graphql/Bt9XYnY7D3OcmZE5lhdx-A/CommunityMediaTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityMemberRelationshipTypeahead<br>
Request URL: `https://x.com/i/api/graphql/6YgvBKI7c3YZ9d7zKKojng/CommunityMemberRelationshipTypeahead`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                | type    | variable |
| :------------------------------------------------- | :------ | :------- |
| responsive_web_graphql_timeline_navigation_enabled | boolean | True     |

## CommunityModerationKeepTweet<br>
Request URL: `https://x.com/i/api/graphql/UA7iT0ZzVyA0BpzrePFV8g/CommunityModerationKeepTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityModerationTweetCasesSlice<br>
Request URL: `https://x.com/i/api/graphql/NvZkvJ1di2eomXNFE67Vag/CommunityModerationTweetCasesSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## CommunityRemoveBannerMedia<br>
Request URL: `https://x.com/i/api/graphql/HLDZNU45kzkCzGusk6kctg/CommunityRemoveBannerMedia`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityRemoveRule<br>
Request URL: `https://x.com/i/api/graphql/-b6ZBGBa6as3U_vdZDCAvg/CommunityRemoveRule`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityReorderRules<br>
Request URL: `https://x.com/i/api/graphql/feMdTSDKL7DXIfC1JAOvkw/CommunityReorderRules`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## RequestToJoinCommunity<br>
Request URL: `https://x.com/i/api/graphql/CW6gdnn1IQOpJkQCcMOgCQ/RequestToJoinCommunity`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityTweetModerationLogSlice<br>
Request URL: `https://x.com/i/api/graphql/uHWhcYfWDBoXJqU4nxHkog/CommunityTweetModerationLogSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |

## CommunityTweetsLoggedOutTimeline<br>
Request URL: `https://x.com/i/api/graphql/WygOreEpbXJJdNLVb0BiQA/CommunityTweetsLoggedOutTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityTweetsRankedLoggedOutTimeline<br>
Request URL: `https://x.com/i/api/graphql/RyBLx9fu9sCa9KVI4sUYdA/CommunityTweetsRankedLoggedOutTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityTweetsTimeline<br>
Request URL: `https://x.com/i/api/graphql/Mvs5UOOEkpXVMDZtUcxR-Q/CommunityTweetsTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityUpdateRole<br>
Request URL: `https://x.com/i/api/graphql/-zfYcQ9PPtTpJcTZaxVF7A/CommunityUpdateRole`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityUserInvite<br>
Request URL: `https://x.com/i/api/graphql/U1yIMRKtqjuHOf8d7eHQHA/CommunityUserInvite`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                | type    | variable |
| :------------------------------------------------- | :------ | :------- |
| responsive_web_graphql_timeline_navigation_enabled | boolean | True     |

## CommunityUserRelationshipTypeahead<br>
Request URL: `https://x.com/i/api/graphql/MOKE3VjNMJ7BVsWdNkv32g/CommunityUserRelationshipTypeahead`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                | type    | variable |
| :------------------------------------------------- | :------ | :------- |
| responsive_web_graphql_timeline_navigation_enabled | boolean | True     |

## ConnectTabTimeline<br>
Request URL: `https://x.com/i/api/graphql/-htzyu_7gjZWxwkySRR6OQ/ConnectTabTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ConversationControlChange<br>
Request URL: `https://x.com/i/api/graphql/57WYJNnWH0vM3Ip_gm8B2g/ConversationControlChange`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ConversationControlDelete<br>
Request URL: `https://x.com/i/api/graphql/OoMO_aSZ1ZXjegeamF9QmA/ConversationControlDelete`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateBookmark<br>
Request URL: `https://x.com/i/api/graphql/aoDbu3RHznuiSkQ9aNM67Q/CreateBookmark`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateHighlight<br>
Request URL: `https://x.com/i/api/graphql/7jEc7ECTTDcNaqsMhjTxXg/CreateHighlight`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateNoteTweet<br>
Request URL: `https://x.com/i/api/graphql/dAlh5Gh9rR5pKk4HU4vW8g/CreateNoteTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| articles_preview_enabled                                                | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## CreateRetweet<br>
Request URL: `https://x.com/i/api/graphql/mbRO74GrOvSfRcJnlMapnQ/CreateRetweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateTweet<br>
Request URL: `https://x.com/i/api/graphql/DQIp0b4mKIciCAZ3bfrwAA/CreateTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| articles_preview_enabled                                                | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## DataSaverMode<br>
Request URL: `https://x.com/i/api/graphql/xF6sXnKJfS2AOylzxRjf6A/DataSaverMode`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## WriteDataSaverPreferences<br>
Request URL: `https://x.com/i/api/graphql/H03etWvZGz41YASxAU2YPg/WriteDataSaverPreferences`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteBookmark<br>
Request URL: `https://x.com/i/api/graphql/Wlmlj2-xzyS1GN3a6cj-mQ/DeleteBookmark`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteContentDisclosure<br>
Request URL: `https://x.com/i/api/graphql/YeIV-eqGwEZXDtYaDsJz2Q/DeleteContentDisclosure`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteHighlight<br>
Request URL: `https://x.com/i/api/graphql/ea-VVDSLIEYNY2_2aPg3Uw/DeleteHighlight`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteRetweet<br>
Request URL: `https://x.com/i/api/graphql/ZyZigVsNiFO6v1dEks1eWg/DeleteRetweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteTweet<br>
Request URL: `https://x.com/i/api/graphql/nxpZCY2K-I6QoFHAHeojFQ/DeleteTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DisableVerifiedPhoneLabel<br>
Request URL: `https://x.com/i/api/graphql/g2m0pAOamawNtVIfjXNMJg/DisableVerifiedPhoneLabel`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## dmBlockUser<br>
Request URL: `https://x.com/i/api/graphql/IYw9u1KEhrS-t-BXsau4Uw/dmBlockUser`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DmNsfwMediaFilterUpdate<br>
Request URL: `https://x.com/i/api/graphql/of_N6O33zfyD4qsFJMYFxA/DmNsfwMediaFilterUpdate`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## dmUnblockUser<br>
Request URL: `https://x.com/i/api/graphql/Krbs6Nak_o7liWQwfV1jOQ/dmUnblockUser`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DownvoteTweet<br>
Request URL: `https://x.com/i/api/graphql/Iu4kUV4vd_iHMupiHPPrAQ/DownvoteTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EnableVerifiedPhoneLabel<br>
Request URL: `https://x.com/i/api/graphql/C3RJFfMsb_KcEytpKmRRkw/EnableVerifiedPhoneLabel`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ExplorePage<br>
Request URL: `https://x.com/i/api/graphql/4aV6nMIbR5dq7VXf4fO0fw/ExplorePage`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ExploreSidebar<br>
Request URL: `https://x.com/i/api/graphql/m5Fwe3H3K4KUZuAUusIdsw/ExploreSidebar`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## FavoriteTweet<br>
Request URL: `https://x.com/i/api/graphql/lI07N6Otwv1PhnEgXILM7A/FavoriteTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FinanceSearchTags<br>
Request URL: `https://x.com/i/api/graphql/4BInQe9OX1qSSZYKT5LB2w/FinanceSearchTags`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## Followers<br>
Request URL: `https://x.com/i/api/graphql/9jsVJ9l2uXUIKslHvJqIhw/Followers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## FollowersYouKnow<br>
Request URL: `https://x.com/i/api/graphql/Zo44022i9Z7XcX7T-Ez7Og/FollowersYouKnow`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## Following<br>
Request URL: `https://x.com/i/api/graphql/OLm4oHZBfqWx8jbcEhWoFw/Following`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## GenericTimelineById<br>
Request URL: `https://x.com/i/api/graphql/KfIjJuNtxHJ-69Ziswa89w/GenericTimelineById`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## GetUsernameAvailabilityAndSuggestions<br>
Request URL: `https://x.com/i/api/graphql/1bMz-9lPrmIXrhFmXntTHw/GetUsernameAvailabilityAndSuggestions`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## GlobalCommunitiesLatestPostSearchTimeline<br>
Request URL: `https://x.com/i/api/graphql/IkDh5AazgOd41ed9-KX-Kg/GlobalCommunitiesLatestPostSearchTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## GlobalCommunitiesPostSearchTimeline<br>
Request URL: `https://x.com/i/api/graphql/PBpi6O2JihUojj_pahZMfg/GlobalCommunitiesPostSearchTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## HomeLatestTimeline<br>
Request URL: `https://x.com/i/api/graphql/n2m8OTpLdsM3Zhv33ljKoA/HomeLatestTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## HomeTimeline<br>
Request URL: `https://x.com/i/api/graphql/MP5Mn45hEc4i_q_UwIHBkw/HomeTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## Likes<br>
Request URL: `https://x.com/i/api/graphql/enfPHxWV3DDAG1XBw3obTg/Likes`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListAddMember<br>
Request URL: `https://x.com/i/api/graphql/E5PskyoAL2YZ6PsJDebfWg/ListAddMember`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## DeleteListBanner<br>
Request URL: `https://x.com/i/api/graphql/yvWETplpC2LJ5I-JpmO9kw/DeleteListBanner`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## EditListBanner<br>
Request URL: `https://x.com/i/api/graphql/28NSvzoW3R_byXWtygy_6A/EditListBanner`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListBySlug<br>
Request URL: `https://x.com/i/api/graphql/SZUkqHCUZJoeBMYCEISwQA/ListBySlug`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CreateList<br>
Request URL: `https://x.com/i/api/graphql/4lSOF4GqldI-NbiFET4ofQ/CreateList`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListCreationRecommendedUsers<br>
Request URL: `https://x.com/i/api/graphql/1CeJq6ffJ2TOUUmGlMcaMA/ListCreationRecommendedUsers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## DeleteList<br>
Request URL: `https://x.com/i/api/graphql/UnN9Th1BDbeLjpgjGSpL3Q/DeleteList`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ListEditRecommendedUsers<br>
Request URL: `https://x.com/i/api/graphql/VYS95YmC19MxnrcZyrtlgA/ListEditRecommendedUsers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListLatestTweetsTimeline<br>
Request URL: `https://x.com/i/api/graphql/27HKUy8ulrflZ9Tole038g/ListLatestTweetsTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListMembers<br>
Request URL: `https://x.com/i/api/graphql/H_0zFfjp73xGZrJpY-C2IQ/ListMembers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListMemberships<br>
Request URL: `https://x.com/i/api/graphql/jQSaHZiOSU9LcOTyid6Xlw/ListMemberships`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## MuteList<br>
Request URL: `https://x.com/i/api/graphql/ZYyanJsskNUcltu9bliMLA/MuteList`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ListOwnerships<br>
Request URL: `https://x.com/i/api/graphql/_4Kw0FQkvL1gb8NgcO_7Rw/ListOwnerships`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListByRestId<br>
Request URL: `https://x.com/i/api/graphql/9VW7EyVQEX88LujnchNXXA/ListByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListRankedTweetsTimeline<br>
Request URL: `https://x.com/i/api/graphql/0su7ft5F69UpEfRO0t5h_Q/ListRankedTweetsTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListRemoveMember<br>
Request URL: `https://x.com/i/api/graphql/LNR-rIOOs8to-dcgUhLndw/ListRemoveMember`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListSearchTimeline<br>
Request URL: `https://x.com/i/api/graphql/r27tgsjT4oNLnk3L-ZSPow/ListSearchTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListSubscribe<br>
Request URL: `https://x.com/i/api/graphql/HclInJtqqdh2wU7Q5-cevA/ListSubscribe`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListSubscribers<br>
Request URL: `https://x.com/i/api/graphql/T_fzE_mzqtsd-rhNvL5YaQ/ListSubscribers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UnmuteList<br>
Request URL: `https://x.com/i/api/graphql/pMZrHRNsmEkXgbn3tOyr7Q/UnmuteList`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ListUnsubscribe<br>
Request URL: `https://x.com/i/api/graphql/GcrwbuN8ZdD84wYDaBlSSg/ListUnsubscribe`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## UpdateList<br>
Request URL: `https://x.com/i/api/graphql/UzVGAR_brbQw1n3mH_PqRA/UpdateList`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListsDiscovery<br>
Request URL: `https://x.com/i/api/graphql/dDauumvw5SAk1mAbRT_dTw/ListsDiscovery`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListsManagementPageTimeline<br>
Request URL: `https://x.com/i/api/graphql/1XBdN5lNYDRTLMX-6XT2iA/ListsManagementPageTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## MediaTabVideoMixer<br>
Request URL: `https://x.com/i/api/graphql/18TSW5Q_qTRPEGy06fpy1A/MediaTabVideoMixer`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ModerateTweet<br>
Request URL: `https://x.com/i/api/graphql/pjFnHGVqCjTcZol0xcBJjw/ModerateTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ModeratedTimeline<br>
Request URL: `https://x.com/i/api/graphql/dUlww3OhPoulBeBOA4GA9Q/ModeratedTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## MutedAccounts<br>
Request URL: `https://x.com/i/api/graphql/RiyYWu0qlF6QyfUkDOCoxA/MutedAccounts`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## PaymentsUsersTypeahead<br>
Request URL: `https://x.com/i/api/graphql/dlHFEO5q9vveDgITz9zELg/PaymentsUsersTypeahead`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                | type    | variable |
| :------------------------------------------------- | :------ | :------- |
| responsive_web_graphql_timeline_navigation_enabled | boolean | True     |

## PinTimeline<br>
Request URL: `https://x.com/i/api/graphql/c_n9vIsY0AZK7Md1Kf-Mow/PinTimeline`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## PinTweet<br>
Request URL: `https://x.com/i/api/graphql/VIHsNu89pK-kW35JpHq7Xw/PinTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## PinnedTimelines<br>
Request URL: `https://x.com/i/api/graphql/M9x70muDafzPDJSY7t-Ldw/PinnedTimelines`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ProfileFilter<br>
Request URL: `https://x.com/i/api/graphql/LOo_3xw2ja1_7HKLa2SGhA/ProfileFilter`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ProfileUserPhoneState<br>
Request URL: `https://x.com/i/api/graphql/5kUWP8C1hcd6omvg6HXXTQ/ProfileUserPhoneState`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## PutClientEducationFlag<br>
Request URL: `https://x.com/i/api/graphql/IjQ-egg0uPkY11NyPMfRMQ/PutClientEducationFlag`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CommunitiesRankedTimeline<br>
Request URL: `https://x.com/i/api/graphql/JI87PLS-bJNrwPIx2Cj6SQ/CommunitiesRankedTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## RemoveFollower<br>
Request URL: `https://x.com/i/api/graphql/QpNfg0kpPRfjROQ_9eOLXA/RemoveFollower`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SearchTimeline<br>
Request URL: `https://x.com/i/api/graphql/yIphfmxUO-hddQHKIOk9tA/SearchTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## SharingAudiospacesListeningDataWithFollowersUpdate<br>
Request URL: `https://x.com/i/api/graphql/5h0kNbk3ii97rmfY6CdgAA/SharingAudiospacesListeningDataWithFollowersUpdate`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SimilarPosts<br>
Request URL: `https://x.com/i/api/graphql/V44P4GxNvHeAgh5zTFLljw/SimilarPosts`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## SuperFollowers<br>
Request URL: `https://x.com/i/api/graphql/WUP547PVIebvHdnxCaZiVg/SuperFollowers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## SupportedLanguages<br>
Request URL: `https://x.com/i/api/graphql/fZ5uZVeledO5SAseKnmTUg/SupportedLanguages`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## timelinesFeedback<br>
Request URL: `https://x.com/i/api/graphql/vfVbgvTPTQ-dF_PQ5lD1WQ/timelinesFeedback`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TrendHistory<br>
Request URL: `https://x.com/i/api/graphql/2YBTNbNWPWfIFNOZ9HdSiw/TrendHistory`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TrendRelevantUsers<br>
Request URL: `https://x.com/i/api/graphql/rkc6iQ-Bj_QcF9ccSWQgPw/TrendRelevantUsers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TVHomeMixer<br>
Request URL: `https://x.com/i/api/graphql/EkWAe3BiSTZ-d33z8F8mpg/TVHomeMixer`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TweetDetail<br>
Request URL: `https://x.com/i/api/graphql/meGUdoK_ryVZ0daBK-HJ2g/TweetDetail`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TweetResultByRestId<br>
Request URL: `https://x.com/i/api/graphql/8CEYnZhCp0dx9DFyyEBlbQ/TweetResultByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## TweetResultsByRestIds<br>
Request URL: `https://x.com/i/api/graphql/Sc9EUQTZNEH-wzegn-nHvQ/TweetResultsByRestIds`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## UndoDownvoteTweet<br>
Request URL: `https://x.com/i/api/graphql/yqhcbdyy59k-FCwOysvvGQ/UndoDownvoteTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UnfavoriteTweet<br>
Request URL: `https://x.com/i/api/graphql/ZYKSe-w7KEslx3JhSIk5LA/UnfavoriteTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UnmentionUserFromConversation<br>
Request URL: `https://x.com/i/api/graphql/xVW9j3OqoBRY9d6_2OONEg/UnmentionUserFromConversation`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UnmoderateTweet<br>
Request URL: `https://x.com/i/api/graphql/pVSyu6PA57TLvIE4nN2tsA/UnmoderateTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UnpinTimeline<br>
Request URL: `https://x.com/i/api/graphql/C4AvEG70PvSEXNRpHUSebA/UnpinTimeline`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## UnpinTweet<br>
Request URL: `https://x.com/i/api/graphql/BhKei844ypCyLYCg0nwigw/UnpinTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UpdatePinnedTimelines<br>
Request URL: `https://x.com/i/api/graphql/vsKBLMdNtTNiCTBPpIFhKA/UpdatePinnedTimelines`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## Upsells<br>
Request URL: `https://x.com/i/api/graphql/Sg3BvwapuCMIjLJ7LGPhMA/Upsells`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                               | type    | variable |
| :-------------------------------- | :------ | :------- |
| subscriptions_upsells_api_enabled | boolean | False    |

## UrtFixtures<br>
Request URL: `https://x.com/i/api/graphql/ZBV9v-F_MpCrx_vHMSL6iA/UrtFixtures`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserArticlesTweets<br>
Request URL: `https://x.com/i/api/graphql/gOeRI2-2RSHQNhhf-_4pUg/UserArticlesTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserBusinessProfileTeamTimeline<br>
Request URL: `https://x.com/i/api/graphql/IX7C1jG3FvsdVDAp-1HUYg/UserBusinessProfileTeamTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserByRestId<br>
Request URL: `https://x.com/i/api/graphql/IBScZCvFJadZC25ubLYNRQ/UserByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| hidden_profile_subscriptions_enabled                              | boolean | True     |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| highlights_tweets_tab_ui_enabled                                  | boolean | True     |
| responsive_web_twitter_article_notes_tab_enabled                  | boolean | True     |
| subscriptions_feature_can_gift_premium                            | boolean | True     |
| creator_subscriptions_tweet_preview_api_enabled                   | boolean | True     |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## UserByScreenName<br>
Request URL: `https://x.com/i/api/graphql/681MIj51w00Aj6dY0GXnHw/UserByScreenName`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| hidden_profile_subscriptions_enabled                              | boolean | True     |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| subscriptions_verification_info_is_identity_verified_enabled      | boolean | True     |
| subscriptions_verification_info_verified_since_enabled            | boolean | True     |
| highlights_tweets_tab_ui_enabled                                  | boolean | True     |
| responsive_web_twitter_article_notes_tab_enabled                  | boolean | True     |
| subscriptions_feature_can_gift_premium                            | boolean | True     |
| creator_subscriptions_tweet_preview_api_enabled                   | boolean | True     |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## GetUserClaims<br>
Request URL: `https://x.com/i/api/graphql/aQ-b88K_Lp7dgHX53MqNQQ/GetUserClaims`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UserCreatorSubscribers<br>
Request URL: `https://x.com/i/api/graphql/nH-FH8fWlPPtHZSR5iqfuQ/UserCreatorSubscribers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserCreatorSubscriptions<br>
Request URL: `https://x.com/i/api/graphql/8qiWrxuavgRRACul8oJo4w/UserCreatorSubscriptions`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserHighlightsTweets<br>
Request URL: `https://x.com/i/api/graphql/W3_o6ulKbViS-IIJJYmzmQ/UserHighlightsTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserMedia<br>
Request URL: `https://x.com/i/api/graphql/Ecl7YvFIuRaUPonVOHzoOA/UserMedia`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserPreferences<br>
Request URL: `https://x.com/i/api/graphql/xFxU-O8hEYe74ovNVU74jA/UserPreferences`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UserPromotableTweets<br>
Request URL: `https://x.com/i/api/graphql/DwepSEciEtB57hOLVPJ9uA/UserPromotableTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserPromotedTweets<br>
Request URL: `https://x.com/i/api/graphql/GM_k5L5vVE5gFZVPCw_uhA/UserPromotedTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserSessionsList<br>
Request URL: `https://x.com/i/api/graphql/vJ-XatpmQSG8bDch8-t9Jw/UserSessionsList`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UserSuperFollowTweets<br>
Request URL: `https://x.com/i/api/graphql/eQNVv5GKuhgyNGmwxjXe3A/UserSuperFollowTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserTweets<br>
Request URL: `https://x.com/i/api/graphql/RyDU3I9VJtPF-Pnl6vrRlw/UserTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserTweetsAndReplies<br>
Request URL: `https://x.com/i/api/graphql/plVqzvVGaDxbFEPoOe_i-A/UserTweetsAndReplies`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UsersByRestIds<br>
Request URL: `https://x.com/i/api/graphql/KxvEwayogTQlef1Y60tz2Q/UsersByRestIds`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## UsersByScreenNames<br>
Request URL: `https://x.com/i/api/graphql/hrwXFO6FlZkmUDqteyKNqA/UsersByScreenNames`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| hidden_profile_subscriptions_enabled                              | boolean | True     |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| subscriptions_verification_info_is_identity_verified_enabled      | boolean | True     |
| subscriptions_verification_info_verified_since_enabled            | boolean | True     |
| highlights_tweets_tab_ui_enabled                                  | boolean | True     |
| responsive_web_twitter_article_notes_tab_enabled                  | boolean | True     |
| subscriptions_feature_can_gift_premium                            | boolean | True     |
| creator_subscriptions_tweet_preview_api_enabled                   | boolean | True     |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## UsersVerifiedAvatars<br>
Request URL: `https://x.com/i/api/graphql/O9O_O1iF0QffoOBjB2OGIQ/UsersVerifiedAvatars`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                | type    | variable |
| :------------------------------------------------- | :------ | :------- |
| responsive_web_graphql_timeline_navigation_enabled | boolean | True     |

## Viewer<br>
Request URL: `https://x.com/i/api/graphql/XdoyrgGBgyPmBDS7Snsd4A/Viewer`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| subscriptions_upsells_api_enabled                                 | boolean | False    |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| creator_subscriptions_tweet_preview_api_enabled                   | boolean | True     |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListProductSubscriptions<br>
Request URL: `https://x.com/i/api/graphql/V8-RP7SxlI4qzRmpCmEqgw/ListProductSubscriptions`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                              | type    | variable |
| :----------------------------------------------- | :------ | :------- |
| subscriptions_management_fetch_next_billing_time | boolean | True     |
| subscriptions_marketing_page_fetch_promotions    | boolean | True     |

## NotABotCheckoutUrlWithEligibility<br>
Request URL: `https://x.com/i/api/graphql/RM4x9h3tF8bCn69VV3-gRg/NotABotCheckoutUrlWithEligibility`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SubscriptionCheckoutUrlWithEligibility<br>
Request URL: `https://x.com/i/api/graphql/fatCCOgstk_uPEl-zNlX8w/SubscriptionCheckoutUrlWithEligibility`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SubscriptionProductDetails<br>
Request URL: `https://x.com/i/api/graphql/el6V21NAvHxCSbMqcuY45w/SubscriptionProductDetails`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                           | type    | variable |
| :-------------------------------------------- | :------ | :------- |
| subscriptions_marketing_page_fetch_promotions | boolean | True     |

## SwitchTier<br>
Request URL: `https://x.com/i/api/graphql/73t92vAzJ9DI1WygCcD7WQ/SwitchTier`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BroadcastQuery<br>
Request URL: `https://x.com/i/api/graphql/yve7DhWM_F-YPBItfYEBxA/BroadcastQuery`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## BookmarkFolderTimeline<br>
Request URL: `https://x.com/i/api/graphql/ANUliFjDZdjSWb_3FNe9sQ/BookmarkFolderTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BookmarkFoldersSlice<br>
Request URL: `https://x.com/i/api/graphql/i78YDd0Tza-dV4SYs58kRg/BookmarkFoldersSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## bookmarkTweetToFolder<br>
Request URL: `https://x.com/i/api/graphql/4KHZvvNbHNf07bsgnL9gWA/bookmarkTweetToFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## Bookmarks<br>
Request URL: `https://x.com/i/api/graphql/i8QZ1qqy36ffA3bxfTaf7w/Bookmarks`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BroadcastQuery<br>
Request URL: `https://x.com/i/api/graphql/yve7DhWM_F-YPBItfYEBxA/BroadcastQuery`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## createBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/6Xxqpq8TM_CREYiuof_h5w/createBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BookmarksAllDelete<br>
Request URL: `https://x.com/i/api/graphql/skiACZKC1GDYli-M8RzEPQ/BookmarksAllDelete`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/2UTTsO-6zs93XqlEUZPsSg/DeleteBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/a6kPp1cS1Dgbsjhapz1PNw/EditBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## RemoveTweetFromBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/2Qbj9XZvtUvyJB4gFwWfaA/RemoveTweetFromBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DmAllSearchSlice<br>
Request URL: `https://x.com/i/api/graphql/iRnhDpR6lACfABoAfB15Fw/DmAllSearchSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| rweb_cashtags_enabled                                             | boolean | True     |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_grok_image_annotation_enabled                      | boolean | True     |
| responsive_web_grok_imagine_annotation_enabled                    | boolean | True     |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## DmGroupSearchSlice<br>
Request URL: `https://x.com/i/api/graphql/LxrvmqF3Lokl_BYZ1c83LA/DmGroupSearchSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DmMutedTimeline<br>
Request URL: `https://x.com/i/api/graphql/QyDqQSyzNScMdXRc0bl-Lw/DmMutedTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## DmPeopleSearchSlice<br>
Request URL: `https://x.com/i/api/graphql/c1MnRRmI-_Bggpntlq9-hQ/DmPeopleSearchSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/cH9HZWz_EW9gnswvA4ZRiQ/CreateDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/LCVzRQGxOaGnOnYH01NQXg/CreateScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/bkh9G3FGgTldS9iTKWWYYw/DeleteDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/CTOVqej0JBXAZSwkp1US0g/DeleteScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/JIeXE-I6BZXHfxsgOkyHYQ/EditDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/_mHkQ5LHpRRjSXKOcG6eZw/EditScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FetchDraftTweets<br>
Request URL: `https://x.com/i/api/graphql/L9RqKWmAWxK6vGtR3Qdsxw/FetchDraftTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FetchScheduledTweets<br>
Request URL: `https://x.com/i/api/graphql/H2elmT2R9DLhWoo0DZFNkA/FetchScheduledTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchAdmitUser<br>
Request URL: `https://x.com/i/api/graphql/s_L4H2iPhZoMtWiqHxd9LA/BirdwatchAdmitUser`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchAliasSelect<br>
Request URL: `https://x.com/i/api/graphql/3ss48WFwGokBH_gj8t_8aQ/BirdwatchAliasSelect`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchFetchAuthenticatedBirdwatchMatchSlice<br>
Request URL: `https://x.com/i/api/graphql/MuUXuE3E9NgoY2ajjlTNTA/BirdwatchFetchAuthenticatedBirdwatchMatchSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## BirdwatchFetchContributorNotesSlice<br>
Request URL: `https://x.com/i/api/graphql/YJGVZrefljNU8PCcGCTNrw/BirdwatchFetchContributorNotesSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| responsive_web_birdwatch_media_notes_enabled                            | boolean | True     |         |
| responsive_web_birdwatch_fast_notes_badge_enabled                       | boolean | False    |         |
| responsive_web_birdwatch_url_notes_enabled                              | boolean | False    |         |
| responsive_web_birdwatch_live_note_enabled                              | boolean | True     |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## BirdwatchCreateAppeal<br>
Request URL: `https://x.com/i/api/graphql/TKdL0YFsX4DMOpMKeneLvA/BirdwatchCreateAppeal`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchCreateBatSignal<br>
Request URL: `https://x.com/i/api/graphql/oCnZiCgsZJe8WEOKuS-xZw/BirdwatchCreateBatSignal`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchCreateNote<br>
Request URL: `https://x.com/i/api/graphql/c9kb2zackjmDEFG8hmii5Q/BirdwatchCreateNote`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| responsive_web_birdwatch_media_notes_enabled                      | boolean | True     |
| responsive_web_birdwatch_url_notes_enabled                        | boolean | False    |
| responsive_web_grok_community_note_translation_is_enabled         | boolean | True     |
| responsive_web_birdwatch_fast_notes_badge_enabled                 | boolean | False    |
| responsive_web_birdwatch_live_note_enabled                        | boolean | True     |
| responsive_web_birdwatch_note_internal_insights_enabled           | boolean | False    |
| responsive_web_grok_community_note_auto_translation_is_enabled    | boolean | True     |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |

## BirdwatchCreateRating<br>
Request URL: `https://x.com/i/api/graphql/gbshFt1Vmddrlio4vHWhhQ/BirdwatchCreateRating`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchDeleteBatSignal<br>
Request URL: `https://x.com/i/api/graphql/yQF40wfWdHfXeKL4ZVklcw/BirdwatchDeleteBatSignal`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchDeleteNote<br>
Request URL: `https://x.com/i/api/graphql/IKS_qrShkDyor6Ri1ahd9g/BirdwatchDeleteNote`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchDeleteRating<br>
Request URL: `https://x.com/i/api/graphql/OpvCOyOoQClUND66zDzrnA/BirdwatchDeleteRating`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchEditNotificationSettings<br>
Request URL: `https://x.com/i/api/graphql/FLgLReVIssXjB_ui3wcrRQ/BirdwatchEditNotificationSettings`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchEditUserSettings<br>
Request URL: `https://x.com/i/api/graphql/k1Unfqb74V4sf2d7-kFkhg/BirdwatchEditUserSettings`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchFetchAliasSelfSelectOptions<br>
Request URL: `https://x.com/i/api/graphql/szoXMke8AZOErso908iglw/BirdwatchFetchAliasSelfSelectOptions`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchFetchAliasSelfSelectStatus<br>
Request URL: `https://x.com/i/api/graphql/LUEdtkcpBlGktUtms4BvwA/BirdwatchFetchAliasSelfSelectStatus`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchFetchAuthenticatedUserProfile<br>
Request URL: `https://x.com/i/api/graphql/kD74-qBfrdRT5rO9YOl57g/BirdwatchFetchAuthenticatedUserProfile`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                 | type    | variable | default |
| :-------------------------------------------------- | :------ | :------- | :------ |
| responsive_web_birdwatch_top_contributor_enabled    | boolean | True     |         |
| responsive_web_birdwatch_mobile_nav_setting_enabled | ...     |          | error   |
| responsive_web_birdwatch_note_limit_enabled         | boolean | True     |         |

## BirdwatchFetchBatSignal<br>
Request URL: `https://x.com/i/api/graphql/7LFdey6iP2bf5f2_aN80Ng/BirdwatchFetchBatSignal`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                   | type    | variable |
| :---------------------------------------------------- | :------ | :------- |
| responsive_web_birdwatch_note_request_sources_enabled | boolean | True     |
| responsive_web_birdwatch_live_note_enabled            | boolean | True     |

## BirdwatchFetchBirdwatchProfile<br>
Request URL: `https://x.com/i/api/graphql/id9iGfEQF47W1kvRBHUmRQ/BirdwatchFetchBirdwatchProfile`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                              | type    | variable |
| :----------------------------------------------- | :------ | :------- |
| responsive_web_birdwatch_top_contributor_enabled | boolean | True     |

## BirdwatchFetchCanTweetBeMediaNote<br>
Request URL: `https://x.com/i/api/graphql/0EW8KDGMK0g3EfCF0iAhsg/BirdwatchFetchCanTweetBeMediaNote`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                          | type    | variable |
| :------------------------------------------- | :------ | :------- |
| responsive_web_birdwatch_media_notes_enabled | boolean | True     |

## BirdwatchFetchClusterData<br>
Request URL: `https://x.com/i/api/graphql/Pca1AGrw2NLa0pJ_s124gw/BirdwatchFetchClusterData`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchFetchGlobalTimeline<br>
Request URL: `https://x.com/i/api/graphql/J8qGhu0_GpQlo36kVzSQCw/BirdwatchFetchGlobalTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BirdwatchFetchMediaMatchSlice<br>
Request URL: `https://x.com/i/api/graphql/BiPeqqCpYM7WIAmjuwIz_Q/BirdwatchFetchMediaMatchSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## BirdwatchFetchNoteTranslation<br>
Request URL: `https://x.com/i/api/graphql/SqFMusBaQL7JnGx46TY4ow/BirdwatchFetchNoteTranslation`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| responsive_web_birdwatch_translation_enabled                      | boolean | True     |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |

## BirdwatchFetchNotes<br>
Request URL: `https://x.com/i/api/graphql/EcK6k5IDJ590kTGXsJMpSw/BirdwatchFetchNotes`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| responsive_web_birdwatch_live_note_enabled                        | boolean | True     |
| responsive_web_birdwatch_enforce_author_user_quotas               | boolean | True     |
| responsive_web_birdwatch_media_notes_enabled                      | boolean | True     |
| responsive_web_birdwatch_url_notes_enabled                        | boolean | False    |
| responsive_web_grok_community_note_translation_is_enabled         | boolean | True     |
| responsive_web_birdwatch_fast_notes_badge_enabled                 | boolean | False    |
| responsive_web_birdwatch_note_internal_insights_enabled           | boolean | False    |
| responsive_web_grok_community_note_auto_translation_is_enabled    | boolean | True     |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |

## BirdwatchFetchOneNote<br>
Request URL: `https://x.com/i/api/graphql/Im6NrMdjcKKpSNWXFvO5IA/BirdwatchFetchOneNote`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| responsive_web_birdwatch_media_notes_enabled                      | boolean | True     |
| responsive_web_birdwatch_url_notes_enabled                        | boolean | False    |
| responsive_web_grok_community_note_translation_is_enabled         | boolean | True     |
| responsive_web_birdwatch_fast_notes_badge_enabled                 | boolean | False    |
| responsive_web_birdwatch_live_note_enabled                        | boolean | True     |
| responsive_web_birdwatch_note_internal_insights_enabled           | boolean | False    |
| responsive_web_grok_community_note_auto_translation_is_enabled    | boolean | True     |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |

## BirdwatchFetchProminentMediaMatchSlice<br>
Request URL: `https://x.com/i/api/graphql/dBzXHycvJbATMlK8kmIdFQ/BirdwatchFetchProminentMediaMatchSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## BirdwatchFetchPublicData<br>
Request URL: `https://x.com/i/api/graphql/T4Qdev0aBeS9tK9v4TkgQg/BirdwatchFetchPublicData`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                    | type    | variable |
| :----------------------------------------------------- | :------ | :------- |
| responsive_web_birdwatch_note_request_download_enabled | boolean | True     |

## BirdwatchFetchSignUpEligiblity<br>
Request URL: `https://x.com/i/api/graphql/yASGrjmFWghK2T0XC3uGVg/BirdwatchFetchSignUpEligiblity`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                            | type    | variable |
| :--------------------------------------------- | :------ | :------- |
| responsive_web_birdwatch_signup_prompt_enabled | boolean | True     |

## BirdwatchFetchSourceLinkSlice<br>
Request URL: `https://x.com/i/api/graphql/isDI00zNA-kvonHCn-ipPA/BirdwatchFetchSourceLinkSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## BirdwatchFetchSourceLinkTweet<br>
Request URL: `https://x.com/i/api/graphql/izQ6fkwrtwKkpNB4M-J0SA/BirdwatchFetchSourceLinkTweet`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                   | type    | variable |
| :---------------------------------------------------- | :------ | :------- |
| responsive_web_birdwatch_note_request_sources_enabled | boolean | True     |

## BirdwatchFetchSuggestionFeedbackOverview<br>
Request URL: `https://x.com/i/api/graphql/7AIVcjFlHB0H9u2Q5Sq4WQ/BirdwatchFetchSuggestionFeedbackOverview`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| responsive_web_birdwatch_media_notes_enabled                            | boolean | True     |         |
| responsive_web_birdwatch_fast_notes_badge_enabled                       | boolean | False    |         |
| responsive_web_birdwatch_url_notes_enabled                              | boolean | False    |         |
| responsive_web_birdwatch_live_note_enabled                              | boolean | True     |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |

## BirdwatchProfileAcknowledgeEarnOut<br>
Request URL: `https://x.com/i/api/graphql/cED9wJy8Nd1kZCCYuIq9zQ/BirdwatchProfileAcknowledgeEarnOut`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BirdwatchRemoveUser<br>
Request URL: `https://x.com/i/api/graphql/6ZEO6UxqjlK4nefrhotZHw/BirdwatchRemoveUser`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BookmarkFolderTimeline<br>
Request URL: `https://x.com/i/api/graphql/ANUliFjDZdjSWb_3FNe9sQ/BookmarkFolderTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BookmarkFoldersSlice<br>
Request URL: `https://x.com/i/api/graphql/i78YDd0Tza-dV4SYs58kRg/BookmarkFoldersSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## bookmarkTweetToFolder<br>
Request URL: `https://x.com/i/api/graphql/4KHZvvNbHNf07bsgnL9gWA/bookmarkTweetToFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## Bookmarks<br>
Request URL: `https://x.com/i/api/graphql/i8QZ1qqy36ffA3bxfTaf7w/Bookmarks`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## createBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/6Xxqpq8TM_CREYiuof_h5w/createBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/cH9HZWz_EW9gnswvA4ZRiQ/CreateDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/LCVzRQGxOaGnOnYH01NQXg/CreateScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BookmarksAllDelete<br>
Request URL: `https://x.com/i/api/graphql/skiACZKC1GDYli-M8RzEPQ/BookmarksAllDelete`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/2UTTsO-6zs93XqlEUZPsSg/DeleteBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/bkh9G3FGgTldS9iTKWWYYw/DeleteDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/CTOVqej0JBXAZSwkp1US0g/DeleteScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/a6kPp1cS1Dgbsjhapz1PNw/EditBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/JIeXE-I6BZXHfxsgOkyHYQ/EditDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/_mHkQ5LHpRRjSXKOcG6eZw/EditScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FetchDraftTweets<br>
Request URL: `https://x.com/i/api/graphql/L9RqKWmAWxK6vGtR3Qdsxw/FetchDraftTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## RemoveTweetFromBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/2Qbj9XZvtUvyJB4gFwWfaA/RemoveTweetFromBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FetchScheduledTweets<br>
Request URL: `https://x.com/i/api/graphql/H2elmT2R9DLhWoo0DZFNkA/FetchScheduledTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicFollow<br>
Request URL: `https://x.com/i/api/graphql/ElqSLWFmsPL4NlZI5e1Grg/TopicFollow`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicNotInterested<br>
Request URL: `https://x.com/i/api/graphql/cPCFdDAaqRjlMRYInZzoDA/TopicNotInterested`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicByRestId<br>
Request URL: `https://x.com/i/api/graphql/4OUZZOonV2h60I0wdlQb_w/TopicByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicToFollowSidebar<br>
Request URL: `https://x.com/i/api/graphql/v77d4TCJr10-gUEf-x_viQ/TopicToFollowSidebar`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TopicUndoNotInterested<br>
Request URL: `https://x.com/i/api/graphql/4tVnt6FoSxaX8L-mDDJo4Q/TopicUndoNotInterested`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicUnfollow<br>
Request URL: `https://x.com/i/api/graphql/srwjU6JM_ZKTj_QMfUGNcw/TopicUnfollow`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ActionTrend<br>
Request URL: `https://x.com/i/api/graphql/imr0xefZmILHTgb6-9pe3g/ActionTrend`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## AiTrendByRestId<br>
Request URL: `https://x.com/i/api/graphql/MN87GPQRvQsGaoWVAvPzew/AiTrendByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |

## ReportTrend<br>
Request URL: `https://x.com/i/api/graphql/3BZlCEmD645zQ-MpJM19CA/ReportTrend`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SaveTrend<br>
Request URL: `https://x.com/i/api/graphql/_fJD2rm-lJI06lKxbUZT2Q/SaveTrend`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## LiveCommerceItemsSlice<br>
Request URL: `https://x.com/i/api/graphql/-lnNX56S2YrZYrLzbccFAQ/LiveCommerceItemsSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ArticleEntitiesSlice<br>
Request URL: `https://x.com/i/api/graphql/Yf0k59hxsLpKcbFlTxVWuw/ArticleEntitiesSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityDelete<br>
Request URL: `https://x.com/i/api/graphql/e4lWqB6m2TA8Fn_j9L9xEA/ArticleEntityDelete`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ArticleEntityDraftCreate<br>
Request URL: `https://x.com/i/api/graphql/HmLpf05Z8r3rRiQ7lspWKQ/ArticleEntityDraftCreate`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityPublish<br>
Request URL: `https://x.com/i/api/graphql/jbML_B-NjpvSt2iAOD70ZQ/ArticleEntityPublish`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityResultByRestId<br>
Request URL: `https://x.com/i/api/graphql/F6_NnjLmtGATDG4bvdDoGQ/ArticleEntityResultByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityUnpublish<br>
Request URL: `https://x.com/i/api/graphql/LpkAFQETXD6ZXw6f-5_xoA/ArticleEntityUnpublish`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityUpdateContent<br>
Request URL: `https://x.com/i/api/graphql/ty5C994iLjeIVKMb2M2uiQ/ArticleEntityUpdateContent`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityUpdateCoverMedia<br>
Request URL: `https://x.com/i/api/graphql/cJ4uV13avUOMAUHm8SFc2g/ArticleEntityUpdateCoverMedia`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityUpdateTitle<br>
Request URL: `https://x.com/i/api/graphql/ndmduuQAmcFpmu9oQZb7bw/ArticleEntityUpdateTitle`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ImmersiveMedia<br>
Request URL: `https://x.com/i/api/graphql/nmgIpZe-bdjJ2p1e91PUPQ/ImmersiveMedia`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ImmersiveProfile<br>
Request URL: `https://x.com/i/api/graphql/kNK7qugPbSfQPzIy7jdt2A/ImmersiveProfile`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityBoostCreateRating<br>
Request URL: `https://x.com/i/api/graphql/k1gINntkffB5NvtVgJBFKw/CommunityBoostCreateRating`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CommunityBoostDeleteRating<br>
Request URL: `https://x.com/i/api/graphql/Az1pj83H-fBSENAeV-lNMA/CommunityBoostDeleteRating`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CommunityBoostFetchPivot<br>
Request URL: `https://x.com/i/api/graphql/ob-WH21vXAVZP7S4JwqN1Q/CommunityBoostFetchPivot`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CommunityBoostFetchPublicData<br>
Request URL: `https://x.com/i/api/graphql/mtel1c9ozKWaWr9-D2wMwg/CommunityBoostFetchPublicData`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DisableUserAccountLabel<br>
Request URL: `https://x.com/i/api/graphql/_ckHEj05gan2VfNHG6thBA/DisableUserAccountLabel`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UserAccountLabel<br>
Request URL: `https://x.com/i/api/graphql/rD5gLxVmMvtdtYU1UHWlFQ/UserAccountLabel`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## PinReply<br>
Request URL: `https://x.com/i/api/graphql/GA2_1uKP9b_GyR4MVAQXAw/PinReply`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UnpinReply<br>
Request URL: `https://x.com/i/api/graphql/iRe6ig5OV1EzOtldNIuGDQ/UnpinReply`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicFollow<br>
Request URL: `https://x.com/i/api/graphql/ElqSLWFmsPL4NlZI5e1Grg/TopicFollow`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicNotInterested<br>
Request URL: `https://x.com/i/api/graphql/cPCFdDAaqRjlMRYInZzoDA/TopicNotInterested`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicByRestId<br>
Request URL: `https://x.com/i/api/graphql/4OUZZOonV2h60I0wdlQb_w/TopicByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicToFollowSidebar<br>
Request URL: `https://x.com/i/api/graphql/v77d4TCJr10-gUEf-x_viQ/TopicToFollowSidebar`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TopicUndoNotInterested<br>
Request URL: `https://x.com/i/api/graphql/4tVnt6FoSxaX8L-mDDJo4Q/TopicUndoNotInterested`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicUnfollow<br>
Request URL: `https://x.com/i/api/graphql/srwjU6JM_ZKTj_QMfUGNcw/TopicUnfollow`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BookmarkFolderTimeline<br>
Request URL: `https://x.com/i/api/graphql/ANUliFjDZdjSWb_3FNe9sQ/BookmarkFolderTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BookmarkFoldersSlice<br>
Request URL: `https://x.com/i/api/graphql/i78YDd0Tza-dV4SYs58kRg/BookmarkFoldersSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## bookmarkTweetToFolder<br>
Request URL: `https://x.com/i/api/graphql/4KHZvvNbHNf07bsgnL9gWA/bookmarkTweetToFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## Bookmarks<br>
Request URL: `https://x.com/i/api/graphql/i8QZ1qqy36ffA3bxfTaf7w/Bookmarks`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## createBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/6Xxqpq8TM_CREYiuof_h5w/createBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BookmarksAllDelete<br>
Request URL: `https://x.com/i/api/graphql/skiACZKC1GDYli-M8RzEPQ/BookmarksAllDelete`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/2UTTsO-6zs93XqlEUZPsSg/DeleteBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/a6kPp1cS1Dgbsjhapz1PNw/EditBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## RemoveTweetFromBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/2Qbj9XZvtUvyJB4gFwWfaA/RemoveTweetFromBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UniversalSearchFeedbackMutation<br>
Request URL: `https://x.com/i/api/graphql/qaIzg304L134B5-NI43j2A/UniversalSearchFeedbackMutation`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EnableLoggedOutWebNotifications<br>
Request URL: `https://x.com/i/api/graphql/BqIHKmwZKtiUBPi07jKctg/EnableLoggedOutWebNotifications`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BroadcastQuery<br>
Request URL: `https://x.com/i/api/graphql/yve7DhWM_F-YPBItfYEBxA/BroadcastQuery`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## CreateDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/cH9HZWz_EW9gnswvA4ZRiQ/CreateDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/LCVzRQGxOaGnOnYH01NQXg/CreateScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/bkh9G3FGgTldS9iTKWWYYw/DeleteDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/CTOVqej0JBXAZSwkp1US0g/DeleteScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/JIeXE-I6BZXHfxsgOkyHYQ/EditDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/_mHkQ5LHpRRjSXKOcG6eZw/EditScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FetchDraftTweets<br>
Request URL: `https://x.com/i/api/graphql/L9RqKWmAWxK6vGtR3Qdsxw/FetchDraftTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FetchScheduledTweets<br>
Request URL: `https://x.com/i/api/graphql/H2elmT2R9DLhWoo0DZFNkA/FetchScheduledTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DisableUserAccountLabel<br>
Request URL: `https://x.com/i/api/graphql/_ckHEj05gan2VfNHG6thBA/DisableUserAccountLabel`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UserAccountLabel<br>
Request URL: `https://x.com/i/api/graphql/rD5gLxVmMvtdtYU1UHWlFQ/UserAccountLabel`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## AudioSpaceAddSharing<br>
Request URL: `https://x.com/i/api/graphql/ynBqkgRXgv07KVEzGp9_Bw/AudioSpaceAddSharing`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## AudioSpaceById<br>
Request URL: `https://x.com/i/api/graphql/rWRLsOhNJ2xjpI1tREYurQ/AudioSpaceById`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| spaces_2022_h2_spaces_communities                                       | boolean | True     |         |
| spaces_2022_h2_clipping                                                 | boolean | True     |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |

## AudioSpaceDeleteSharing<br>
Request URL: `https://x.com/i/api/graphql/YMbfLMTUUEzEEMibvvR26Q/AudioSpaceDeleteSharing`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## AudioSpaceSearch<br>
Request URL: `https://x.com/i/api/graphql/NTq79TuSz6fHj8lQaferJw/AudioSpaceSearch`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BrowseSpaceTopics<br>
Request URL: `https://x.com/i/api/graphql/TYpVV9QioZfViHqEqRZxJA/BrowseSpaceTopics`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SubscribeToScheduledSpace<br>
Request URL: `https://x.com/i/api/graphql/Sxn4YOlaAwEKjnjWV0h7Mw/SubscribeToScheduledSpace`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UnsubscribeFromScheduledSpace<br>
Request URL: `https://x.com/i/api/graphql/Zevhh76Msw574ZSs2NQHGQ/UnsubscribeFromScheduledSpace`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicFollow<br>
Request URL: `https://x.com/i/api/graphql/ElqSLWFmsPL4NlZI5e1Grg/TopicFollow`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicNotInterested<br>
Request URL: `https://x.com/i/api/graphql/cPCFdDAaqRjlMRYInZzoDA/TopicNotInterested`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicByRestId<br>
Request URL: `https://x.com/i/api/graphql/4OUZZOonV2h60I0wdlQb_w/TopicByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicToFollowSidebar<br>
Request URL: `https://x.com/i/api/graphql/v77d4TCJr10-gUEf-x_viQ/TopicToFollowSidebar`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TopicUndoNotInterested<br>
Request URL: `https://x.com/i/api/graphql/4tVnt6FoSxaX8L-mDDJo4Q/TopicUndoNotInterested`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicUnfollow<br>
Request URL: `https://x.com/i/api/graphql/srwjU6JM_ZKTj_QMfUGNcw/TopicUnfollow`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/cH9HZWz_EW9gnswvA4ZRiQ/CreateDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/LCVzRQGxOaGnOnYH01NQXg/CreateScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/bkh9G3FGgTldS9iTKWWYYw/DeleteDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/CTOVqej0JBXAZSwkp1US0g/DeleteScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/JIeXE-I6BZXHfxsgOkyHYQ/EditDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/_mHkQ5LHpRRjSXKOcG6eZw/EditScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FetchDraftTweets<br>
Request URL: `https://x.com/i/api/graphql/L9RqKWmAWxK6vGtR3Qdsxw/FetchDraftTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FetchScheduledTweets<br>
Request URL: `https://x.com/i/api/graphql/H2elmT2R9DLhWoo0DZFNkA/FetchScheduledTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BroadcastQuery<br>
Request URL: `https://x.com/i/api/graphql/yve7DhWM_F-YPBItfYEBxA/BroadcastQuery`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## SidebarUserRecommendations<br>
Request URL: `https://x.com/i/api/graphql/B8SkVDMV_i1jVFPSX0whqg/SidebarUserRecommendations`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListProductSubscriptions<br>
Request URL: `https://x.com/i/api/graphql/V8-RP7SxlI4qzRmpCmEqgw/ListProductSubscriptions`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                              | type    | variable |
| :----------------------------------------------- | :------ | :------- |
| subscriptions_management_fetch_next_billing_time | boolean | True     |
| subscriptions_marketing_page_fetch_promotions    | boolean | True     |

## NotABotCheckoutUrlWithEligibility<br>
Request URL: `https://x.com/i/api/graphql/RM4x9h3tF8bCn69VV3-gRg/NotABotCheckoutUrlWithEligibility`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SubscriptionCheckoutUrlWithEligibility<br>
Request URL: `https://x.com/i/api/graphql/fatCCOgstk_uPEl-zNlX8w/SubscriptionCheckoutUrlWithEligibility`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SubscriptionProductDetails<br>
Request URL: `https://x.com/i/api/graphql/el6V21NAvHxCSbMqcuY45w/SubscriptionProductDetails`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                           | type    | variable |
| :-------------------------------------------- | :------ | :------- |
| subscriptions_marketing_page_fetch_promotions | boolean | True     |

## SwitchTier<br>
Request URL: `https://x.com/i/api/graphql/73t92vAzJ9DI1WygCcD7WQ/SwitchTier`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/cH9HZWz_EW9gnswvA4ZRiQ/CreateDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/LCVzRQGxOaGnOnYH01NQXg/CreateScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/bkh9G3FGgTldS9iTKWWYYw/DeleteDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/CTOVqej0JBXAZSwkp1US0g/DeleteScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/JIeXE-I6BZXHfxsgOkyHYQ/EditDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/_mHkQ5LHpRRjSXKOcG6eZw/EditScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FetchDraftTweets<br>
Request URL: `https://x.com/i/api/graphql/L9RqKWmAWxK6vGtR3Qdsxw/FetchDraftTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FetchScheduledTweets<br>
Request URL: `https://x.com/i/api/graphql/H2elmT2R9DLhWoo0DZFNkA/FetchScheduledTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ArticleEntitiesSlice<br>
Request URL: `https://x.com/i/api/graphql/Yf0k59hxsLpKcbFlTxVWuw/ArticleEntitiesSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityDelete<br>
Request URL: `https://x.com/i/api/graphql/e4lWqB6m2TA8Fn_j9L9xEA/ArticleEntityDelete`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ArticleEntityDraftCreate<br>
Request URL: `https://x.com/i/api/graphql/HmLpf05Z8r3rRiQ7lspWKQ/ArticleEntityDraftCreate`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityPublish<br>
Request URL: `https://x.com/i/api/graphql/jbML_B-NjpvSt2iAOD70ZQ/ArticleEntityPublish`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityResultByRestId<br>
Request URL: `https://x.com/i/api/graphql/F6_NnjLmtGATDG4bvdDoGQ/ArticleEntityResultByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityUnpublish<br>
Request URL: `https://x.com/i/api/graphql/LpkAFQETXD6ZXw6f-5_xoA/ArticleEntityUnpublish`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityUpdateContent<br>
Request URL: `https://x.com/i/api/graphql/ty5C994iLjeIVKMb2M2uiQ/ArticleEntityUpdateContent`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityUpdateCoverMedia<br>
Request URL: `https://x.com/i/api/graphql/cJ4uV13avUOMAUHm8SFc2g/ArticleEntityUpdateCoverMedia`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ArticleEntityUpdateTitle<br>
Request URL: `https://x.com/i/api/graphql/ndmduuQAmcFpmu9oQZb7bw/ArticleEntityUpdateTitle`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ClearGrokConversations<br>
Request URL: `https://x.com/i/api/graphql/83Gg0lfI-47Z3-ZOxyUjiQ/ClearGrokConversations`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateGrokConversation<br>
Request URL: `https://x.com/i/api/graphql/vvC5uy7pWWHXS2aDi1FZeA/CreateGrokConversation`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteGrokMessage<br>
Request URL: `https://x.com/i/api/graphql/kaH0vdJmbuocpRAeWpRC7A/DeleteGrokMessage`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## GrokConversationItemsByRestId<br>
Request URL: `https://x.com/i/api/graphql/ed2glRiL1eG88jqeS9Mt4w/GrokConversationItemsByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## GrokHistory<br>
Request URL: `https://x.com/i/api/graphql/9Hyh5D4-WXLnExZkONSkZg/GrokHistory`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## GrokHome<br>
Request URL: `https://x.com/i/api/graphql/QAPGIKJVaPXYD-gO9kxc9w/GrokHome`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## GrokMediaHistory<br>
Request URL: `https://x.com/i/api/graphql/azn3Sg0APPjb2Jtd7gqxsw/GrokMediaHistory`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## GrokPinConversation<br>
Request URL: `https://x.com/i/api/graphql/_6czUDKiWzcvBUKMoDZ19w/GrokPinConversation`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## GrokPinnedConversations<br>
Request URL: `https://x.com/i/api/graphql/BHKxYTkc5SCupV7oqJBr0g/GrokPinnedConversations`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SearchGrokConversations<br>
Request URL: `https://x.com/i/api/graphql/Sr2QEitvnemma5D2NJlA2Q/SearchGrokConversations`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## GrokShare<br>
Request URL: `https://x.com/i/api/graphql/Kwf3gi8Stg2YBEJR6B7sfw/GrokShare`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## GrokUnpinConversation<br>
Request URL: `https://x.com/i/api/graphql/-5e798p4EVbuhGGFFuw3Tg/GrokUnpinConversation`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## GrokUserEventsLog<br>
Request URL: `https://x.com/i/api/graphql/AB0damyVo0wBhhebQIwtsg/GrokUserEventsLog`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SetGrokPreferences<br>
Request URL: `https://x.com/i/api/graphql/NqLS09LPofalCjVhFolKtA/SetGrokPreferences`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## Favoriters<br>
Request URL: `https://x.com/i/api/graphql/6SsQvi19ZR-txuiu7Uo2OA/Favoriters`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
| key                    | type    | variable |
| :--------------------- | :------ | :------- |
| tweetId                | ...     | o        |
| count                  | ...     | t        |
| cursor                 | ...     | i        |
| enableRanking          | ...     | r        |
| includePromotedContent | boolean | True     |
| ...()(0,n.g)           | ...     | _        |

#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## Retweeters<br>
Request URL: `https://x.com/i/api/graphql/FeoLYPQ-q4bmjGLTZTGs0g/Retweeters`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
| key                    | type    | variable |
| :--------------------- | :------ | :------- |
| tweetId                | ...     | r        |
| count                  | ...     | t        |
| cursor                 | ...     | i        |
| enableRanking          | ...     | a        |
| includePromotedContent | boolean | True     |
| ...()(0,n.g)           | ...     | _        |

#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TweetEditHistory<br>
Request URL: `https://x.com/i/api/graphql/pMXJaYs8H1xEAJ4NOhxIoQ/TweetEditHistory`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
| key                                    | type    | variable |
| :------------------------------------- | :------ | :------- |
| tweetId                                | ...     | t        |
| ...()(0,n.g)                           | ...     | _        |
| withQuickPromoteEligibilityTweetFields | boolean | True     |

#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TopicFollow<br>
Request URL: `https://x.com/i/api/graphql/ElqSLWFmsPL4NlZI5e1Grg/TopicFollow`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicNotInterested<br>
Request URL: `https://x.com/i/api/graphql/cPCFdDAaqRjlMRYInZzoDA/TopicNotInterested`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicByRestId<br>
Request URL: `https://x.com/i/api/graphql/4OUZZOonV2h60I0wdlQb_w/TopicByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicToFollowSidebar<br>
Request URL: `https://x.com/i/api/graphql/v77d4TCJr10-gUEf-x_viQ/TopicToFollowSidebar`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TopicUndoNotInterested<br>
Request URL: `https://x.com/i/api/graphql/4tVnt6FoSxaX8L-mDDJo4Q/TopicUndoNotInterested`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TopicUnfollow<br>
Request URL: `https://x.com/i/api/graphql/srwjU6JM_ZKTj_QMfUGNcw/TopicUnfollow`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DmAllSearchSlice<br>
Request URL: `https://x.com/i/api/graphql/iRnhDpR6lACfABoAfB15Fw/DmAllSearchSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| rweb_cashtags_enabled                                             | boolean | True     |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_grok_image_annotation_enabled                      | boolean | True     |
| responsive_web_grok_imagine_annotation_enabled                    | boolean | True     |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## DmGroupSearchSlice<br>
Request URL: `https://x.com/i/api/graphql/LxrvmqF3Lokl_BYZ1c83LA/DmGroupSearchSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DmMutedTimeline<br>
Request URL: `https://x.com/i/api/graphql/QyDqQSyzNScMdXRc0bl-Lw/DmMutedTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## DmPeopleSearchSlice<br>
Request URL: `https://x.com/i/api/graphql/c1MnRRmI-_Bggpntlq9-hQ/DmPeopleSearchSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## WriteEmailNotificationSettings<br>
Request URL: `https://x.com/i/api/graphql/2qKKYFQift8p5-J1k6kqxQ/WriteEmailNotificationSettings`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ViewerEmailSettings<br>
Request URL: `https://x.com/i/api/graphql/JpjlNgn4sLGvS6tgpTzYBg/ViewerEmailSettings`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ListProductSubscriptions<br>
Request URL: `https://x.com/i/api/graphql/V8-RP7SxlI4qzRmpCmEqgw/ListProductSubscriptions`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                              | type    | variable |
| :----------------------------------------------- | :------ | :------- |
| subscriptions_management_fetch_next_billing_time | boolean | True     |
| subscriptions_marketing_page_fetch_promotions    | boolean | True     |

## NotABotCheckoutUrlWithEligibility<br>
Request URL: `https://x.com/i/api/graphql/RM4x9h3tF8bCn69VV3-gRg/NotABotCheckoutUrlWithEligibility`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SubscriptionCheckoutUrlWithEligibility<br>
Request URL: `https://x.com/i/api/graphql/fatCCOgstk_uPEl-zNlX8w/SubscriptionCheckoutUrlWithEligibility`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SubscriptionProductDetails<br>
Request URL: `https://x.com/i/api/graphql/el6V21NAvHxCSbMqcuY45w/SubscriptionProductDetails`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                           | type    | variable |
| :-------------------------------------------- | :------ | :------- |
| subscriptions_marketing_page_fetch_promotions | boolean | True     |

## SwitchTier<br>
Request URL: `https://x.com/i/api/graphql/73t92vAzJ9DI1WygCcD7WQ/SwitchTier`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/cH9HZWz_EW9gnswvA4ZRiQ/CreateDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/LCVzRQGxOaGnOnYH01NQXg/CreateScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/bkh9G3FGgTldS9iTKWWYYw/DeleteDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/CTOVqej0JBXAZSwkp1US0g/DeleteScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditDraftTweet<br>
Request URL: `https://x.com/i/api/graphql/JIeXE-I6BZXHfxsgOkyHYQ/EditDraftTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditScheduledTweet<br>
Request URL: `https://x.com/i/api/graphql/_mHkQ5LHpRRjSXKOcG6eZw/EditScheduledTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FetchDraftTweets<br>
Request URL: `https://x.com/i/api/graphql/L9RqKWmAWxK6vGtR3Qdsxw/FetchDraftTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FetchScheduledTweets<br>
Request URL: `https://x.com/i/api/graphql/H2elmT2R9DLhWoo0DZFNkA/FetchScheduledTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BookmarkFolderTimeline<br>
Request URL: `https://x.com/i/api/graphql/ANUliFjDZdjSWb_3FNe9sQ/BookmarkFolderTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BookmarkFoldersSlice<br>
Request URL: `https://x.com/i/api/graphql/i78YDd0Tza-dV4SYs58kRg/BookmarkFoldersSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## bookmarkTweetToFolder<br>
Request URL: `https://x.com/i/api/graphql/4KHZvvNbHNf07bsgnL9gWA/bookmarkTweetToFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## Bookmarks<br>
Request URL: `https://x.com/i/api/graphql/i8QZ1qqy36ffA3bxfTaf7w/Bookmarks`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BroadcastQuery<br>
Request URL: `https://x.com/i/api/graphql/yve7DhWM_F-YPBItfYEBxA/BroadcastQuery`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## createBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/6Xxqpq8TM_CREYiuof_h5w/createBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BookmarksAllDelete<br>
Request URL: `https://x.com/i/api/graphql/skiACZKC1GDYli-M8RzEPQ/BookmarksAllDelete`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/2UTTsO-6zs93XqlEUZPsSg/DeleteBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EditBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/a6kPp1cS1Dgbsjhapz1PNw/EditBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## RemoveTweetFromBookmarkFolder<br>
Request URL: `https://x.com/i/api/graphql/2Qbj9XZvtUvyJB4gFwWfaA/RemoveTweetFromBookmarkFolder`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EnableLoggedOutWebNotifications<br>
Request URL: `https://x.com/i/api/graphql/BqIHKmwZKtiUBPi07jKctg/EnableLoggedOutWebNotifications`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ListProductSubscriptions<br>
Request URL: `https://x.com/i/api/graphql/V8-RP7SxlI4qzRmpCmEqgw/ListProductSubscriptions`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                              | type    | variable |
| :----------------------------------------------- | :------ | :------- |
| subscriptions_management_fetch_next_billing_time | boolean | True     |
| subscriptions_marketing_page_fetch_promotions    | boolean | True     |

## NotABotCheckoutUrlWithEligibility<br>
Request URL: `https://x.com/i/api/graphql/RM4x9h3tF8bCn69VV3-gRg/NotABotCheckoutUrlWithEligibility`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SubscriptionCheckoutUrlWithEligibility<br>
Request URL: `https://x.com/i/api/graphql/fatCCOgstk_uPEl-zNlX8w/SubscriptionCheckoutUrlWithEligibility`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SubscriptionProductDetails<br>
Request URL: `https://x.com/i/api/graphql/el6V21NAvHxCSbMqcuY45w/SubscriptionProductDetails`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                           | type    | variable |
| :-------------------------------------------- | :------ | :------- |
| subscriptions_marketing_page_fetch_promotions | boolean | True     |

## SwitchTier<br>
Request URL: `https://x.com/i/api/graphql/73t92vAzJ9DI1WygCcD7WQ/SwitchTier`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## Favoriters<br>
Request URL: `https://x.com/i/api/graphql/6SsQvi19ZR-txuiu7Uo2OA/Favoriters`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
| key                    | type    | variable |
| :--------------------- | :------ | :------- |
| tweetId                | ...     | o        |
| count                  | ...     | t        |
| cursor                 | ...     | i        |
| enableRanking          | ...     | r        |
| includePromotedContent | boolean | True     |
| ...()(0,n.g)           | ...     | _        |

#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## Retweeters<br>
Request URL: `https://x.com/i/api/graphql/FeoLYPQ-q4bmjGLTZTGs0g/Retweeters`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
| key                    | type    | variable |
| :--------------------- | :------ | :------- |
| tweetId                | ...     | r        |
| count                  | ...     | t        |
| cursor                 | ...     | i        |
| enableRanking          | ...     | a        |
| includePromotedContent | boolean | True     |
| ...()(0,n.g)           | ...     | _        |

#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TweetEditHistory<br>
Request URL: `https://x.com/i/api/graphql/pMXJaYs8H1xEAJ4NOhxIoQ/TweetEditHistory`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
| key                                    | type    | variable |
| :------------------------------------- | :------ | :------- |
| tweetId                                | ...     | t        |
| ...()(0,n.g)                           | ...     | _        |
| withQuickPromoteEligibilityTweetFields | boolean | True     |

#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## SetDefault<br>
Request URL: `https://x.com/i/api/graphql/QEMLEzEMzoPNbeauKCCLbg/SetDefault`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeletePaymentMethod<br>
Request URL: `https://x.com/i/api/graphql/VaaLGwK5KNLoc7wsOmp4uw/DeletePaymentMethod`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## PaymentMethods<br>
Request URL: `https://x.com/i/api/graphql/mPF_G9okpbZuLcD6mN8K9g/PaymentMethods`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## AdAccounts<br>
Request URL: `https://x.com/i/api/graphql/a8KxGfFQAmm3WxqemuqSRA/AdAccounts`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## AudienceEstimate<br>
Request URL: `https://x.com/i/api/graphql/1LYVUabJBYkPlUAWRabB3g/AudienceEstimate`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BoostAudienceEstimate<br>
Request URL: `https://x.com/i/api/graphql/hiAXpFX4zFb6vOvGctGYyQ/BoostAudienceEstimate`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## Budgets<br>
Request URL: `https://x.com/i/api/graphql/mbK3oSQotwcJXyQIBE3uYw/Budgets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## Coupons<br>
Request URL: `https://x.com/i/api/graphql/R1h43jnAl2bsDoUkgZb7NQ/Coupons`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateQuickPromotion<br>
Request URL: `https://x.com/i/api/graphql/1nVomZMCriTpwOvy2jYs9g/CreateQuickPromotion`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## QuickPromoteEligibility<br>
Request URL: `https://x.com/i/api/graphql/LtpCXh66W-uXh7u7XSRA8Q/QuickPromoteEligibility`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EnrollCoupon<br>
Request URL: `https://x.com/i/api/graphql/SOyGmNGaEXcvk15s5bqDrA/EnrollCoupon`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TargetingCatalogSearch<br>
Request URL: `https://x.com/i/api/graphql/z7Ij1OnFDsb1Is08hkBDKw/TargetingCatalogSearch`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## GenerateDrmToken<br>
Request URL: `https://x.com/i/api/graphql/6csp1Dw5r5zveD-1qaqXdA/GenerateDrmToken`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## NotificationsTimeline<br>
Request URL: `https://x.com/i/api/graphql/N3mgBYxj7qj5GUZmyYuKFg/NotificationsTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## AddContentDisclosure<br>
Request URL: `https://x.com/i/api/graphql/D1nwFlsu_qHsX92YzoRaaA/AddContentDisclosure`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## AuthenticatePeriscope<br>
Request URL: `https://x.com/i/api/graphql/r7VUmxbfqNkx7uwjgONSNw/AuthenticatePeriscope`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## getAltTextPromptPreference<br>
Request URL: `https://x.com/i/api/graphql/PFIxTk8owMoZgiMccP0r4g/getAltTextPromptPreference`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## updateAltTextPromptPreference<br>
Request URL: `https://x.com/i/api/graphql/aQKrduk_DA46XfOQDkcEng/updateAltTextPromptPreference`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BakeryQuery<br>
Request URL: `https://x.com/i/api/graphql/pROR-yRiBVsEjJyHt3fvhg/BakeryQuery`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## BlockedAccountsAll<br>
Request URL: `https://x.com/i/api/graphql/dXAVNBZjLy9JoZd6JCjc-A/BlockedAccountsAll`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BlockedAccountsImported<br>
Request URL: `https://x.com/i/api/graphql/zUg9jtmTnE1WBM-EZZiNrg/BlockedAccountsImported`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BlueVerifiedFollowers<br>
Request URL: `https://x.com/i/api/graphql/OBBd6Dw-4qEYbsu3hGkyxg/BlueVerifiedFollowers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## BookmarkSearchTimeline<br>
Request URL: `https://x.com/i/api/graphql/vqy7GkKMR5TYk8_ysuhmfA/BookmarkSearchTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CombinedLists<br>
Request URL: `https://x.com/i/api/graphql/3U0qQNFb6dcwmkxbWml-fg/CombinedLists`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunitiesExploreTimeline<br>
Request URL: `https://x.com/i/api/graphql/dkAxLX-HyMDJmkkKmIGLxw/CommunitiesExploreTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunitiesMainDiscoveryModule<br>
Request URL: `https://x.com/i/api/graphql/R-5hjsDZdYGg_0o7gn_tRw/CommunitiesMainDiscoveryModule`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunitiesMainPageTimeline<br>
Request URL: `https://x.com/i/api/graphql/931VC3ixbMk_VYYXTWepEw/CommunitiesMainPageTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunitiesMembershipsSlice<br>
Request URL: `https://x.com/i/api/graphql/OI_VJ_Oeq9YYfKIc8_gHPw/CommunitiesMembershipsSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunitiesMembershipsTimeline<br>
Request URL: `https://x.com/i/api/graphql/vHyK5CyW66TYaE135auZTg/CommunitiesMembershipsTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityAboutTimeline<br>
Request URL: `https://x.com/i/api/graphql/js6zU09RGyDxdwTwC8GR-A/CommunityAboutTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CreateCommunity<br>
Request URL: `https://x.com/i/api/graphql/y7-4F5PlFVfy3zWCY1vp3Q/CreateCommunity`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityCreateRule<br>
Request URL: `https://x.com/i/api/graphql/NzKgB8IC6oGsrFMkUZOFUA/CommunityCreateRule`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityDiscoveryTimeline<br>
Request URL: `https://x.com/i/api/graphql/xkvrM0czUYQPbU5eeBM-YQ/CommunityDiscoveryTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityEditBannerMedia<br>
Request URL: `https://x.com/i/api/graphql/nmEE2-ykwhfM_D3mQfeRHw/CommunityEditBannerMedia`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityEditName<br>
Request URL: `https://x.com/i/api/graphql/Da2zfJuj9i2Ajvg4C9XXyA/CommunityEditName`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityEditPurpose<br>
Request URL: `https://x.com/i/api/graphql/HRKiFSryD6D2RONzjzdypg/CommunityEditPurpose`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityEditQuestion<br>
Request URL: `https://x.com/i/api/graphql/tGjrkMr6DZIqgvpFBTWolQ/CommunityEditQuestion`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityEditRule<br>
Request URL: `https://x.com/i/api/graphql/_s0HUhBH2yWtBxMulyqycg/CommunityEditRule`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityByRestId<br>
Request URL: `https://x.com/i/api/graphql/3f2qLb4hqmRLGwsAzCmA_Q/CommunityByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityHashtagsTimeline<br>
Request URL: `https://x.com/i/api/graphql/40DyrMxfCknGuZwE-keW_Q/CommunityHashtagsTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## JoinCommunity<br>
Request URL: `https://x.com/i/api/graphql/8lR4bNpbNZKbmK6MwZtU-Q/JoinCommunity`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## LeaveCommunity<br>
Request URL: `https://x.com/i/api/graphql/0YUrwfndvmPYbgmQxPFySQ/LeaveCommunity`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityMediaLoggedOutTimeline<br>
Request URL: `https://x.com/i/api/graphql/sQAAjH5i6YA6VmSlybi7aw/CommunityMediaLoggedOutTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityMediaTimeline<br>
Request URL: `https://x.com/i/api/graphql/Bt9XYnY7D3OcmZE5lhdx-A/CommunityMediaTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityMemberRelationshipTypeahead<br>
Request URL: `https://x.com/i/api/graphql/6YgvBKI7c3YZ9d7zKKojng/CommunityMemberRelationshipTypeahead`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                | type    | variable |
| :------------------------------------------------- | :------ | :------- |
| responsive_web_graphql_timeline_navigation_enabled | boolean | True     |

## CommunityModerationKeepTweet<br>
Request URL: `https://x.com/i/api/graphql/UA7iT0ZzVyA0BpzrePFV8g/CommunityModerationKeepTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityModerationTweetCasesSlice<br>
Request URL: `https://x.com/i/api/graphql/NvZkvJ1di2eomXNFE67Vag/CommunityModerationTweetCasesSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## CommunityRemoveBannerMedia<br>
Request URL: `https://x.com/i/api/graphql/HLDZNU45kzkCzGusk6kctg/CommunityRemoveBannerMedia`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityRemoveRule<br>
Request URL: `https://x.com/i/api/graphql/-b6ZBGBa6as3U_vdZDCAvg/CommunityRemoveRule`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityReorderRules<br>
Request URL: `https://x.com/i/api/graphql/feMdTSDKL7DXIfC1JAOvkw/CommunityReorderRules`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## RequestToJoinCommunity<br>
Request URL: `https://x.com/i/api/graphql/CW6gdnn1IQOpJkQCcMOgCQ/RequestToJoinCommunity`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityTweetModerationLogSlice<br>
Request URL: `https://x.com/i/api/graphql/uHWhcYfWDBoXJqU4nxHkog/CommunityTweetModerationLogSlice`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |

## CommunityTweetsLoggedOutTimeline<br>
Request URL: `https://x.com/i/api/graphql/WygOreEpbXJJdNLVb0BiQA/CommunityTweetsLoggedOutTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityTweetsRankedLoggedOutTimeline<br>
Request URL: `https://x.com/i/api/graphql/RyBLx9fu9sCa9KVI4sUYdA/CommunityTweetsRankedLoggedOutTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityTweetsTimeline<br>
Request URL: `https://x.com/i/api/graphql/Mvs5UOOEkpXVMDZtUcxR-Q/CommunityTweetsTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## CommunityUpdateRole<br>
Request URL: `https://x.com/i/api/graphql/-zfYcQ9PPtTpJcTZaxVF7A/CommunityUpdateRole`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CommunityUserInvite<br>
Request URL: `https://x.com/i/api/graphql/U1yIMRKtqjuHOf8d7eHQHA/CommunityUserInvite`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                | type    | variable |
| :------------------------------------------------- | :------ | :------- |
| responsive_web_graphql_timeline_navigation_enabled | boolean | True     |

## CommunityUserRelationshipTypeahead<br>
Request URL: `https://x.com/i/api/graphql/MOKE3VjNMJ7BVsWdNkv32g/CommunityUserRelationshipTypeahead`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                | type    | variable |
| :------------------------------------------------- | :------ | :------- |
| responsive_web_graphql_timeline_navigation_enabled | boolean | True     |

## ConnectTabTimeline<br>
Request URL: `https://x.com/i/api/graphql/-htzyu_7gjZWxwkySRR6OQ/ConnectTabTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ConversationControlChange<br>
Request URL: `https://x.com/i/api/graphql/57WYJNnWH0vM3Ip_gm8B2g/ConversationControlChange`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ConversationControlDelete<br>
Request URL: `https://x.com/i/api/graphql/OoMO_aSZ1ZXjegeamF9QmA/ConversationControlDelete`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateBookmark<br>
Request URL: `https://x.com/i/api/graphql/aoDbu3RHznuiSkQ9aNM67Q/CreateBookmark`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateHighlight<br>
Request URL: `https://x.com/i/api/graphql/7jEc7ECTTDcNaqsMhjTxXg/CreateHighlight`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateNoteTweet<br>
Request URL: `https://x.com/i/api/graphql/dAlh5Gh9rR5pKk4HU4vW8g/CreateNoteTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| articles_preview_enabled                                                | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## CreateRetweet<br>
Request URL: `https://x.com/i/api/graphql/mbRO74GrOvSfRcJnlMapnQ/CreateRetweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CreateTweet<br>
Request URL: `https://x.com/i/api/graphql/DQIp0b4mKIciCAZ3bfrwAA/CreateTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| articles_preview_enabled                                                | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## DataSaverMode<br>
Request URL: `https://x.com/i/api/graphql/xF6sXnKJfS2AOylzxRjf6A/DataSaverMode`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## WriteDataSaverPreferences<br>
Request URL: `https://x.com/i/api/graphql/H03etWvZGz41YASxAU2YPg/WriteDataSaverPreferences`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteBookmark<br>
Request URL: `https://x.com/i/api/graphql/Wlmlj2-xzyS1GN3a6cj-mQ/DeleteBookmark`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteContentDisclosure<br>
Request URL: `https://x.com/i/api/graphql/YeIV-eqGwEZXDtYaDsJz2Q/DeleteContentDisclosure`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteHighlight<br>
Request URL: `https://x.com/i/api/graphql/ea-VVDSLIEYNY2_2aPg3Uw/DeleteHighlight`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteRetweet<br>
Request URL: `https://x.com/i/api/graphql/ZyZigVsNiFO6v1dEks1eWg/DeleteRetweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DeleteTweet<br>
Request URL: `https://x.com/i/api/graphql/nxpZCY2K-I6QoFHAHeojFQ/DeleteTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DisableVerifiedPhoneLabel<br>
Request URL: `https://x.com/i/api/graphql/g2m0pAOamawNtVIfjXNMJg/DisableVerifiedPhoneLabel`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## dmBlockUser<br>
Request URL: `https://x.com/i/api/graphql/IYw9u1KEhrS-t-BXsau4Uw/dmBlockUser`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DmNsfwMediaFilterUpdate<br>
Request URL: `https://x.com/i/api/graphql/of_N6O33zfyD4qsFJMYFxA/DmNsfwMediaFilterUpdate`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## dmUnblockUser<br>
Request URL: `https://x.com/i/api/graphql/Krbs6Nak_o7liWQwfV1jOQ/dmUnblockUser`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## DownvoteTweet<br>
Request URL: `https://x.com/i/api/graphql/Iu4kUV4vd_iHMupiHPPrAQ/DownvoteTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## EnableVerifiedPhoneLabel<br>
Request URL: `https://x.com/i/api/graphql/C3RJFfMsb_KcEytpKmRRkw/EnableVerifiedPhoneLabel`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ExplorePage<br>
Request URL: `https://x.com/i/api/graphql/4aV6nMIbR5dq7VXf4fO0fw/ExplorePage`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ExploreSidebar<br>
Request URL: `https://x.com/i/api/graphql/m5Fwe3H3K4KUZuAUusIdsw/ExploreSidebar`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## FavoriteTweet<br>
Request URL: `https://x.com/i/api/graphql/lI07N6Otwv1PhnEgXILM7A/FavoriteTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## FinanceSearchTags<br>
Request URL: `https://x.com/i/api/graphql/4BInQe9OX1qSSZYKT5LB2w/FinanceSearchTags`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## Followers<br>
Request URL: `https://x.com/i/api/graphql/9jsVJ9l2uXUIKslHvJqIhw/Followers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## FollowersYouKnow<br>
Request URL: `https://x.com/i/api/graphql/Zo44022i9Z7XcX7T-Ez7Og/FollowersYouKnow`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## Following<br>
Request URL: `https://x.com/i/api/graphql/OLm4oHZBfqWx8jbcEhWoFw/Following`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## GenericTimelineById<br>
Request URL: `https://x.com/i/api/graphql/KfIjJuNtxHJ-69Ziswa89w/GenericTimelineById`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## GetUsernameAvailabilityAndSuggestions<br>
Request URL: `https://x.com/i/api/graphql/1bMz-9lPrmIXrhFmXntTHw/GetUsernameAvailabilityAndSuggestions`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## GlobalCommunitiesLatestPostSearchTimeline<br>
Request URL: `https://x.com/i/api/graphql/IkDh5AazgOd41ed9-KX-Kg/GlobalCommunitiesLatestPostSearchTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## GlobalCommunitiesPostSearchTimeline<br>
Request URL: `https://x.com/i/api/graphql/PBpi6O2JihUojj_pahZMfg/GlobalCommunitiesPostSearchTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## HomeLatestTimeline<br>
Request URL: `https://x.com/i/api/graphql/n2m8OTpLdsM3Zhv33ljKoA/HomeLatestTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## HomeTimeline<br>
Request URL: `https://x.com/i/api/graphql/MP5Mn45hEc4i_q_UwIHBkw/HomeTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## Likes<br>
Request URL: `https://x.com/i/api/graphql/enfPHxWV3DDAG1XBw3obTg/Likes`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListAddMember<br>
Request URL: `https://x.com/i/api/graphql/E5PskyoAL2YZ6PsJDebfWg/ListAddMember`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## DeleteListBanner<br>
Request URL: `https://x.com/i/api/graphql/yvWETplpC2LJ5I-JpmO9kw/DeleteListBanner`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## EditListBanner<br>
Request URL: `https://x.com/i/api/graphql/28NSvzoW3R_byXWtygy_6A/EditListBanner`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListBySlug<br>
Request URL: `https://x.com/i/api/graphql/SZUkqHCUZJoeBMYCEISwQA/ListBySlug`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## CreateList<br>
Request URL: `https://x.com/i/api/graphql/4lSOF4GqldI-NbiFET4ofQ/CreateList`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListCreationRecommendedUsers<br>
Request URL: `https://x.com/i/api/graphql/1CeJq6ffJ2TOUUmGlMcaMA/ListCreationRecommendedUsers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## DeleteList<br>
Request URL: `https://x.com/i/api/graphql/UnN9Th1BDbeLjpgjGSpL3Q/DeleteList`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ListEditRecommendedUsers<br>
Request URL: `https://x.com/i/api/graphql/VYS95YmC19MxnrcZyrtlgA/ListEditRecommendedUsers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListLatestTweetsTimeline<br>
Request URL: `https://x.com/i/api/graphql/27HKUy8ulrflZ9Tole038g/ListLatestTweetsTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListMembers<br>
Request URL: `https://x.com/i/api/graphql/H_0zFfjp73xGZrJpY-C2IQ/ListMembers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListMemberships<br>
Request URL: `https://x.com/i/api/graphql/jQSaHZiOSU9LcOTyid6Xlw/ListMemberships`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## MuteList<br>
Request URL: `https://x.com/i/api/graphql/ZYyanJsskNUcltu9bliMLA/MuteList`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ListOwnerships<br>
Request URL: `https://x.com/i/api/graphql/_4Kw0FQkvL1gb8NgcO_7Rw/ListOwnerships`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListByRestId<br>
Request URL: `https://x.com/i/api/graphql/9VW7EyVQEX88LujnchNXXA/ListByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListRankedTweetsTimeline<br>
Request URL: `https://x.com/i/api/graphql/0su7ft5F69UpEfRO0t5h_Q/ListRankedTweetsTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListRemoveMember<br>
Request URL: `https://x.com/i/api/graphql/LNR-rIOOs8to-dcgUhLndw/ListRemoveMember`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListSearchTimeline<br>
Request URL: `https://x.com/i/api/graphql/r27tgsjT4oNLnk3L-ZSPow/ListSearchTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListSubscribe<br>
Request URL: `https://x.com/i/api/graphql/HclInJtqqdh2wU7Q5-cevA/ListSubscribe`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListSubscribers<br>
Request URL: `https://x.com/i/api/graphql/T_fzE_mzqtsd-rhNvL5YaQ/ListSubscribers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UnmuteList<br>
Request URL: `https://x.com/i/api/graphql/pMZrHRNsmEkXgbn3tOyr7Q/UnmuteList`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ListUnsubscribe<br>
Request URL: `https://x.com/i/api/graphql/GcrwbuN8ZdD84wYDaBlSSg/ListUnsubscribe`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## UpdateList<br>
Request URL: `https://x.com/i/api/graphql/UzVGAR_brbQw1n3mH_PqRA/UpdateList`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ListsDiscovery<br>
Request URL: `https://x.com/i/api/graphql/dDauumvw5SAk1mAbRT_dTw/ListsDiscovery`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ListsManagementPageTimeline<br>
Request URL: `https://x.com/i/api/graphql/1XBdN5lNYDRTLMX-6XT2iA/ListsManagementPageTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## MediaTabVideoMixer<br>
Request URL: `https://x.com/i/api/graphql/18TSW5Q_qTRPEGy06fpy1A/MediaTabVideoMixer`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ModerateTweet<br>
Request URL: `https://x.com/i/api/graphql/pjFnHGVqCjTcZol0xcBJjw/ModerateTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## ModeratedTimeline<br>
Request URL: `https://x.com/i/api/graphql/dUlww3OhPoulBeBOA4GA9Q/ModeratedTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## MutedAccounts<br>
Request URL: `https://x.com/i/api/graphql/RiyYWu0qlF6QyfUkDOCoxA/MutedAccounts`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## PaymentsUsersTypeahead<br>
Request URL: `https://x.com/i/api/graphql/dlHFEO5q9vveDgITz9zELg/PaymentsUsersTypeahead`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                | type    | variable |
| :------------------------------------------------- | :------ | :------- |
| responsive_web_graphql_timeline_navigation_enabled | boolean | True     |

## PinTimeline<br>
Request URL: `https://x.com/i/api/graphql/c_n9vIsY0AZK7Md1Kf-Mow/PinTimeline`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## PinTweet<br>
Request URL: `https://x.com/i/api/graphql/VIHsNu89pK-kW35JpHq7Xw/PinTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## PinnedTimelines<br>
Request URL: `https://x.com/i/api/graphql/M9x70muDafzPDJSY7t-Ldw/PinnedTimelines`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## ProfileFilter<br>
Request URL: `https://x.com/i/api/graphql/LOo_3xw2ja1_7HKLa2SGhA/ProfileFilter`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## ProfileUserPhoneState<br>
Request URL: `https://x.com/i/api/graphql/5kUWP8C1hcd6omvg6HXXTQ/ProfileUserPhoneState`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## PutClientEducationFlag<br>
Request URL: `https://x.com/i/api/graphql/IjQ-egg0uPkY11NyPMfRMQ/PutClientEducationFlag`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## CommunitiesRankedTimeline<br>
Request URL: `https://x.com/i/api/graphql/JI87PLS-bJNrwPIx2Cj6SQ/CommunitiesRankedTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## RemoveFollower<br>
Request URL: `https://x.com/i/api/graphql/QpNfg0kpPRfjROQ_9eOLXA/RemoveFollower`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SearchTimeline<br>
Request URL: `https://x.com/i/api/graphql/yIphfmxUO-hddQHKIOk9tA/SearchTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## SharingAudiospacesListeningDataWithFollowersUpdate<br>
Request URL: `https://x.com/i/api/graphql/5h0kNbk3ii97rmfY6CdgAA/SharingAudiospacesListeningDataWithFollowersUpdate`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## SimilarPosts<br>
Request URL: `https://x.com/i/api/graphql/V44P4GxNvHeAgh5zTFLljw/SimilarPosts`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## SuperFollowers<br>
Request URL: `https://x.com/i/api/graphql/WUP547PVIebvHdnxCaZiVg/SuperFollowers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## SupportedLanguages<br>
Request URL: `https://x.com/i/api/graphql/fZ5uZVeledO5SAseKnmTUg/SupportedLanguages`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## timelinesFeedback<br>
Request URL: `https://x.com/i/api/graphql/vfVbgvTPTQ-dF_PQ5lD1WQ/timelinesFeedback`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## TrendHistory<br>
Request URL: `https://x.com/i/api/graphql/2YBTNbNWPWfIFNOZ9HdSiw/TrendHistory`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TrendRelevantUsers<br>
Request URL: `https://x.com/i/api/graphql/rkc6iQ-Bj_QcF9ccSWQgPw/TrendRelevantUsers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TVHomeMixer<br>
Request URL: `https://x.com/i/api/graphql/EkWAe3BiSTZ-d33z8F8mpg/TVHomeMixer`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TweetDetail<br>
Request URL: `https://x.com/i/api/graphql/meGUdoK_ryVZ0daBK-HJ2g/TweetDetail`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## TweetResultByRestId<br>
Request URL: `https://x.com/i/api/graphql/8CEYnZhCp0dx9DFyyEBlbQ/TweetResultByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## TweetResultsByRestIds<br>
Request URL: `https://x.com/i/api/graphql/Sc9EUQTZNEH-wzegn-nHvQ/TweetResultsByRestIds`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |

## UndoDownvoteTweet<br>
Request URL: `https://x.com/i/api/graphql/yqhcbdyy59k-FCwOysvvGQ/UndoDownvoteTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UnfavoriteTweet<br>
Request URL: `https://x.com/i/api/graphql/ZYKSe-w7KEslx3JhSIk5LA/UnfavoriteTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UnmentionUserFromConversation<br>
Request URL: `https://x.com/i/api/graphql/xVW9j3OqoBRY9d6_2OONEg/UnmentionUserFromConversation`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UnmoderateTweet<br>
Request URL: `https://x.com/i/api/graphql/pVSyu6PA57TLvIE4nN2tsA/UnmoderateTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UnpinTimeline<br>
Request URL: `https://x.com/i/api/graphql/C4AvEG70PvSEXNRpHUSebA/UnpinTimeline`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## UnpinTweet<br>
Request URL: `https://x.com/i/api/graphql/BhKei844ypCyLYCg0nwigw/UnpinTweet`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UpdatePinnedTimelines<br>
Request URL: `https://x.com/i/api/graphql/vsKBLMdNtTNiCTBPpIFhKA/UpdatePinnedTimelines`<br>
Request Method: `POST`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## Upsells<br>
Request URL: `https://x.com/i/api/graphql/Sg3BvwapuCMIjLJ7LGPhMA/Upsells`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                               | type    | variable |
| :-------------------------------- | :------ | :------- |
| subscriptions_upsells_api_enabled | boolean | False    |

## UrtFixtures<br>
Request URL: `https://x.com/i/api/graphql/ZBV9v-F_MpCrx_vHMSL6iA/UrtFixtures`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserArticlesTweets<br>
Request URL: `https://x.com/i/api/graphql/gOeRI2-2RSHQNhhf-_4pUg/UserArticlesTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserBusinessProfileTeamTimeline<br>
Request URL: `https://x.com/i/api/graphql/IX7C1jG3FvsdVDAp-1HUYg/UserBusinessProfileTeamTimeline`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserByRestId<br>
Request URL: `https://x.com/i/api/graphql/IBScZCvFJadZC25ubLYNRQ/UserByRestId`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| hidden_profile_subscriptions_enabled                              | boolean | True     |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| highlights_tweets_tab_ui_enabled                                  | boolean | True     |
| responsive_web_twitter_article_notes_tab_enabled                  | boolean | True     |
| subscriptions_feature_can_gift_premium                            | boolean | True     |
| creator_subscriptions_tweet_preview_api_enabled                   | boolean | True     |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## UserByScreenName<br>
Request URL: `https://x.com/i/api/graphql/681MIj51w00Aj6dY0GXnHw/UserByScreenName`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| hidden_profile_subscriptions_enabled                              | boolean | True     |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| subscriptions_verification_info_is_identity_verified_enabled      | boolean | True     |
| subscriptions_verification_info_verified_since_enabled            | boolean | True     |
| highlights_tweets_tab_ui_enabled                                  | boolean | True     |
| responsive_web_twitter_article_notes_tab_enabled                  | boolean | True     |
| subscriptions_feature_can_gift_premium                            | boolean | True     |
| creator_subscriptions_tweet_preview_api_enabled                   | boolean | True     |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## GetUserClaims<br>
Request URL: `https://x.com/i/api/graphql/aQ-b88K_Lp7dgHX53MqNQQ/GetUserClaims`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UserCreatorSubscribers<br>
Request URL: `https://x.com/i/api/graphql/nH-FH8fWlPPtHZSR5iqfuQ/UserCreatorSubscribers`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserCreatorSubscriptions<br>
Request URL: `https://x.com/i/api/graphql/8qiWrxuavgRRACul8oJo4w/UserCreatorSubscriptions`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserHighlightsTweets<br>
Request URL: `https://x.com/i/api/graphql/W3_o6ulKbViS-IIJJYmzmQ/UserHighlightsTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserMedia<br>
Request URL: `https://x.com/i/api/graphql/Ecl7YvFIuRaUPonVOHzoOA/UserMedia`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserPreferences<br>
Request URL: `https://x.com/i/api/graphql/xFxU-O8hEYe74ovNVU74jA/UserPreferences`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UserPromotableTweets<br>
Request URL: `https://x.com/i/api/graphql/DwepSEciEtB57hOLVPJ9uA/UserPromotableTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserPromotedTweets<br>
Request URL: `https://x.com/i/api/graphql/GM_k5L5vVE5gFZVPCw_uhA/UserPromotedTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserSessionsList<br>
Request URL: `https://x.com/i/api/graphql/vJ-XatpmQSG8bDch8-t9Jw/UserSessionsList`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
`None`<br>
## UserSuperFollowTweets<br>
Request URL: `https://x.com/i/api/graphql/eQNVv5GKuhgyNGmwxjXe3A/UserSuperFollowTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserTweets<br>
Request URL: `https://x.com/i/api/graphql/RyDU3I9VJtPF-Pnl6vrRlw/UserTweets`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UserTweetsAndReplies<br>
Request URL: `https://x.com/i/api/graphql/plVqzvVGaDxbFEPoOe_i-A/UserTweetsAndReplies`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                                     | type    | variable | default |
| :---------------------------------------------------------------------- | :------ | :------- | :------ |
| rweb_video_screen_enabled                                               | boolean | False    |         |
| rweb_cashtags_enabled                                                   | boolean | True     |         |
| profile_label_improvements_pcf_label_in_post_enabled                    | boolean | True     |         |
| responsive_web_profile_redirect_enabled                                 | boolean | False    |         |
| rweb_tipjar_consumption_enabled                                         | boolean | False    |         |
| verified_phone_label_enabled                                            | boolean | False    |         |
| creator_subscriptions_tweet_preview_api_enabled                         | boolean | True     |         |
| responsive_web_graphql_timeline_navigation_enabled                      | boolean | True     |         |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled       | boolean | False    |         |
| premium_content_api_read_enabled                                        | boolean | False    |         |
| communities_web_enable_tweet_community_results_fetch                    | boolean | True     |         |
| c9s_tweet_anatomy_moderator_badge_enabled                               | boolean | True     |         |
| responsive_web_grok_analyze_button_fetch_trends_enabled                 | boolean | False    |         |
| responsive_web_grok_analyze_post_followups_enabled                      | boolean | False    |         |
| rweb_cashtags_composer_attachment_enabled                               | boolean | True     |         |
| responsive_web_jetfuel_frame                                            | boolean | True     |         |
| responsive_web_grok_share_attachment_enabled                            | boolean | True     |         |
| responsive_web_grok_annotations_enabled                                 | boolean | True     |         |
| articles_preview_enabled                                                | boolean | True     |         |
| responsive_web_edit_tweet_api_enabled                                   | boolean | True     |         |
| rweb_conversational_replies_downvote_enabled                            | ...     |          | error   |
| graphql_is_translatable_rweb_tweet_is_translatable_enabled              | boolean | True     |         |
| view_counts_everywhere_api_enabled                                      | boolean | True     |         |
| longform_notetweets_consumption_enabled                                 | boolean | True     |         |
| responsive_web_twitter_article_tweet_consumption_enabled                | boolean | True     |         |
| content_disclosure_indicator_enabled                                    | boolean | True     |         |
| content_disclosure_ai_generated_indicator_enabled                       | boolean | True     |         |
| responsive_web_grok_show_grok_translated_post                           | boolean | True     |         |
| responsive_web_grok_analysis_button_from_backend                        | boolean | True     |         |
| post_ctas_fetch_enabled                                                 | boolean | True     |         |
| freedom_of_speech_not_reach_fetch_enabled                               | boolean | True     |         |
| standardized_nudges_misinfo                                             | boolean | True     |         |
| tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled | boolean | True     |         |
| longform_notetweets_rich_text_read_enabled                              | boolean | True     |         |
| longform_notetweets_inline_media_enabled                                | boolean | False    |         |
| responsive_web_grok_image_annotation_enabled                            | boolean | True     |         |
| responsive_web_grok_imagine_annotation_enabled                          | boolean | True     |         |
| responsive_web_grok_community_note_auto_translation_is_enabled          | boolean | True     |         |
| responsive_web_enhance_cards_enabled                                    | boolean | False    |         |

## UsersByRestIds<br>
Request URL: `https://x.com/i/api/graphql/KxvEwayogTQlef1Y60tz2Q/UsersByRestIds`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## UsersByScreenNames<br>
Request URL: `https://x.com/i/api/graphql/hrwXFO6FlZkmUDqteyKNqA/UsersByScreenNames`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| hidden_profile_subscriptions_enabled                              | boolean | True     |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| subscriptions_verification_info_is_identity_verified_enabled      | boolean | True     |
| subscriptions_verification_info_verified_since_enabled            | boolean | True     |
| highlights_tweets_tab_ui_enabled                                  | boolean | True     |
| responsive_web_twitter_article_notes_tab_enabled                  | boolean | True     |
| subscriptions_feature_can_gift_premium                            | boolean | True     |
| creator_subscriptions_tweet_preview_api_enabled                   | boolean | True     |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

## UsersVerifiedAvatars<br>
Request URL: `https://x.com/i/api/graphql/O9O_O1iF0QffoOBjB2OGIQ/UsersVerifiedAvatars`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                | type    | variable |
| :------------------------------------------------- | :------ | :------- |
| responsive_web_graphql_timeline_navigation_enabled | boolean | True     |

## Viewer<br>
Request URL: `https://x.com/i/api/graphql/XdoyrgGBgyPmBDS7Snsd4A/Viewer`<br>
Request Method: `GET`<br>
### Param<br>
#### variables<br>
`None`<br>
#### features<br>
| key                                                               | type    | variable |
| :---------------------------------------------------------------- | :------ | :------- |
| subscriptions_upsells_api_enabled                                 | boolean | False    |
| profile_label_improvements_pcf_label_in_post_enabled              | boolean | True     |
| responsive_web_profile_redirect_enabled                           | boolean | False    |
| rweb_tipjar_consumption_enabled                                   | boolean | False    |
| verified_phone_label_enabled                                      | boolean | False    |
| creator_subscriptions_tweet_preview_api_enabled                   | boolean | True     |
| responsive_web_graphql_skip_user_profile_image_extensions_enabled | boolean | False    |
| responsive_web_graphql_timeline_navigation_enabled                | boolean | True     |

